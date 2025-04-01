import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const placeOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.body; // Get from JWT later
  const { stockSymbol, quantity, type } = req.body;

  const stock = await prisma.stock.findUnique({
    where: { symbol: stockSymbol },
  });
  if (!stock) {
    res.status(400).json({ error: "Stock not found" });
    return;
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (type === "BUY") {
    const cost = stock.price * quantity;
    if (user!.balance < cost) {
      res.status(400).json({ error: "Insufficient balance" });
      return;
    }

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { balance: user!.balance - cost },
      }),
      prisma.portfolio.upsert({
        where: { userId_stockId: { userId, stockId: stock.id } },
        update: { quantity: { increment: quantity } },
        create: { userId, stockId: stock.id, quantity },
      }),
      prisma.order.create({
        data: {
          userId,
          stockId: stock.id,
          quantity,
          type: "BUY",
          status: "COMPLETED",
        },
      }),
    ]);

    res.json({ message: "Buy order executed" });
  } else if (type === "SELL") {
    const portfolio = await prisma.portfolio.findUnique({
      where: { userId_stockId: { userId, stockId: stock.id } },
    });
    if (!portfolio || portfolio.quantity < quantity) {
      res.status(400).json({ error: "Not enough shares" });
      return;
    }

    const earnings = stock.price * quantity;

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { balance: user!.balance + earnings },
      }),
      prisma.portfolio.update({
        where: { id: portfolio.id },
        data: { quantity: portfolio.quantity - quantity },
      }),
      prisma.order.create({
        data: {
          userId,
          stockId: stock.id,
          quantity,
          type: "SELL",
          status: "COMPLETED",
        },
      }),
    ]);

    res.json({ message: "Sell order executed" });
  }
};

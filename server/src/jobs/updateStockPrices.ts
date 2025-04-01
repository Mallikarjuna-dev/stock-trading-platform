import { PrismaClient } from "@prisma/client";
import cron from "node-cron";

const prisma = new PrismaClient();

const generateRandomPrice = (currentPrice: number) => {
  return parseFloat((currentPrice * (0.95 + Math.random() * 0.1)).toFixed(2));
};

export const updateStockPrices = async () => {
  const stocks = await prisma.stock.findMany();
  for (const stock of stocks) {
    const newPrice = generateRandomPrice(stock.price);
    await prisma.stock.update({
      where: { id: stock.id },
      data: { price: newPrice },
    });
    await prisma.stockHistory.create({
      data: { stockId: stock.id, price: newPrice },
    });
  }
};

cron.schedule("* * * * *", updateStockPrices);

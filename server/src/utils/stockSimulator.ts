import { PrismaClient } from "@prisma/client";
import cron from "node-cron";

const prisma = new PrismaClient();
const STOCKS = ["AAPL", "GOOGL", "AMZN", "TSLA"];

const getRandomPrice = (previousPrice: number): number => {
  return parseFloat((previousPrice * (0.95 + Math.random() * 0.1)).toFixed(2));
};

// Update stock prices every 1 minute
cron.schedule("* * * * *", async () => {
  console.log("Updating stock prices...");

  for (const stock of STOCKS) {
    const lastPriceEntry = await prisma.order.findFirst({
      where: { stock },
      orderBy: { createdAt: "desc" },
    });

    const lastPrice = lastPriceEntry ? lastPriceEntry.price : 100;
    const newPrice = getRandomPrice(lastPrice);

    await prisma.order.create({
      data: {
        stock,
        price: newPrice,
        quantity: 0,
        type: "update",
        userId: "SYSTEM",
      },
    });
  }

  console.log("Stock prices updated");
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./utils/stockSimulator";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/auth";
import tradeRoutes from "./routes/trade";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

(async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
})();

app.use("/api/auth", authRoutes);
app.use("/api/trade", tradeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

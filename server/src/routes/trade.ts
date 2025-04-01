import { Router } from "express";
import { placeOrder } from "../controllers/tradeController";

const router = Router();
router.post("/trade", placeOrder);

export default router;

import express from "express";
import {
  savePurchase,
  getPurchase,
  deletePurchase,
  updatePurchase,
} from "../BLL/Purchase.js";

const router = express.Router();

router
  .get("/", getPurchase)
  .post("/", savePurchase)
  .put("/", updatePurchase)
  .delete("/", deletePurchase);

export default router;

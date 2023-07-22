import express from "express";
import { saveSale, getSales, deleteSale, updateSale } from "../BLL/Sales.js";

const router = express.Router();

router
  .get("/", getSales)
  .post("/", saveSale)
  .put("/", updateSale)
  .delete("/", deleteSale);

export default router;

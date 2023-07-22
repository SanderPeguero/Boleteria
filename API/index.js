import express from "express";
import cors from "cors";
import EventsRoutes from "./Routes/EventsRoutes.js";
import SalesRoutes from "./Routes/SalesRoutes.js";
import PurchaseRoute from "./Routes/PurchasedRoute.js";

//middleware;
const app = express();
app.use(cors());
app.use(express.json());

//all route;
app.use("/events", EventsRoutes);
app.use("/sales", SalesRoutes);
app.use("/purchase", PurchaseRoute);

//common error handling;
app.use((err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

//app listener;
app.listen(3001, () => {
  console.log("Server running on port 3001");
});

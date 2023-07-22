import express from "express";
import {
  saveEvent,
  getEvents,
  deleteEvent,
  updateEvent,
} from "../BLL/Events.js";

const router = express.Router();

router
  .get("/", getEvents)
  .post("/", saveEvent)
  .put("/", updateEvent)
  .delete("/", deleteEvent);

export default router;

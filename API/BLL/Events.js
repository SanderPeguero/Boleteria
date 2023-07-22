import { postDocument, queryDocument } from "../DAL/mysql.js";
import EventModel from "../Models/Event.js";

export async function saveEvent(req, res, next) {
  try {
    await EventModel.validateAsync(req.body);

    const sql = "INSERT INTO events SET ";
    const result = await postDocument(sql, req.body);
    if (!result.insertId)
      throw { message: "Couldn't added the event", status: 500 };
    res.send({ message: "Added successfully" });
  } catch (error) {
    next(error);
  }
}

export async function updateEvent(req, res, next) {
  try {
    const sql = "UPDATE events SET ";
    const condition = ` WHERE id = '${req.query.id}'`;
    const result = await postDocument(sql, req.body, condition);
    if (!result.changedRows)
      throw { message: "Couldn't update the event", status: 500 };
    res.send({ message: "Updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function getEvents(req, res, next) {
  try {
    let sql = "SELECT * FROM events ";
    if (req.query.id) sql += `WHERE id = '${req.query.id}'`;
    const result = await queryDocument(sql);
    res.send(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteEvent(req, res, next) {
  try {
    const { id } = req.query;
    const sql = `DELETE FROM events WHERE id = ${id}`;
    const result = await queryDocument(sql);
    if (!result.affectedRows) throw { message: "Couldn't delete", status: 500 };
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
}

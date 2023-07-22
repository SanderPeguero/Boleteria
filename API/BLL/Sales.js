import { postDocument, queryDocument } from "../DAL/mysql.js";
import SaleModel from "../Models/Sale.js";

export async function saveSale(req, res, next) {
  try {
    await SaleModel.validateAsync(req.body);

    //check have avalable seat;
    const eventSql = `SELECT * FROM events WHERE id = '${req.query.event_id}'`;
    const event = await queryDocument(eventSql);
    if (!event.length) throw { message: "No events found", status: 404 };
    else if (!event[0].Seats < req.body.Seats)
      throw { message: "There is no available seat", status: 404 };

    //save the sale;
    const sql = "INSERT INTO sales SET ";
    const result = await postDocument(sql, req.body);
    if (!result.insertId)
      throw { message: "Couldn't added the sale", status: 500 };
    res.send({ message: "Added successfully" });
  } catch (error) {
    next(error);
  }
}

export async function updateSale(req, res, next) {
  try {
    const sql = "UPDATE sales SET ";
    const conditions = `WHERE id = '${req.query.id}'`;
    const result = await postDocument(sql, req.body, conditions);
    if (!result.changedRows)
      throw { message: "Couldn't update the sale", status: 500 };
    res.send({ message: "Updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function getSales(req, res, next) {
  try {
    let sql = "SELECT * FROM sales ";
    if (req.query.id) sql += `WHERE id = '${req.query.id}'`;
    const result = await queryDocument(sql);
    res.send(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteSale(req, res, next) {
  try {
    const sql = `DELETE FROM sales WHERE id = '${req.query.id}'`;
    const result = await queryDocument(sql);
    if (!result.affectedRows) throw { message: "Couldn't delete", status: 500 };
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
}

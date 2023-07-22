import { postDocument, queryDocument } from "../DAL/mysql.js";
import EventPurchased from "../Models/EventPurchased.js";

export async function getPurchase(req, res, next) {
  try {
    let sql =
      "SELECT ep.*, e.name as event_name FROM event_purchased ep INNER JOIN events e  ON e.id = ep.events_id";
    if (req.query?.id) sql += `WHERE id = '${req.query.id}'`;
    if (req.query?.user_id) sql += ` WHERE user_id = '${req.query.user_id}'`;
    const result = await queryDocument(sql);
    res.send(result);
  } catch (error) {
    next(error);
  }
}

export async function savePurchase(req, res, next) {
  try {
    await EventPurchased.validateAsync(req.body);

    const sql = "INSERT INTO event_purchased SET ";
    const result = await postDocument(sql, req.body);
    if (!result.insertId) throw { message: "Couldn't purchase", status: 500 };
    res.send({ message: "Purchased successfully" });
  } catch (error) {
    next(error);
  }
}

export async function updatePurchase(req, res, next) {
  try {
    const sql = "UPDATE event_purchased SET ";
    const condition = ` WHERE id = '${req.query.id}' AND user_id = '${req.query.user_id}'`;
    const result = await postDocument(sql, req.body, condition);
    if (!result.changedRows)
      throw { message: "Couldn't update your purchase", status: 500 };
    res.send({ message: "Updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function deletePurchase(req, res, next) {
  try {
    const sql = `DELETE FROM event_purchased WHERE id = '${req.query.id}' AND user_id = '${req.query.user_id}'`;
    const result = await queryDocument(sql);
    if (!result.affectedRows) throw { message: "Couldn't delete", status: 500 };
    res.send({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
}

import mysql from "mysql2/promise";

let connectionData = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "b49b68378d148c",
  password: "90f3b5e2",
  database: "heroku_02fbc9e78140c23",
};

async function mySql() {
  const db = await mysql.createConnection({
    host: connectionData.host,
    user: connectionData.user,
    database: connectionData.database,
    password: connectionData.password,
    connectionLimit: 10,
    waitForConnections: true,
  });

  return db;
}

export const queryDocument = async (query) => {
  const connection = await mySql();
  const result = await connection.execute(query);
  await connection.end();
  return result[0];
};

export const postDocument = async (query, doc, option = undefined) => {
  const connection = await mySql();
  let data = "";
  Object.entries(doc).forEach(([key, value]) => {
    if (data) {
      data += `, ${key} = '${value}'`;
    } else data += `${key} = '${value}'`;
  });
  if (option) data += option;
  const result = await connection.execute(query + data);
  await connection.end();
  return result[0];
};

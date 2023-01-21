import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
  })
  .promise();

export const getWord = async (id) => {
  const query = `SELECT * FROM words WHERE id = ?`;
  const [rows] = await pool.query(query, [id]);
  const result = rows[0];
  return result;
};

export const getAll = async () => {
  const query = `SELECT * FROM words ORDER BY created DESC`;
  const [result] = await pool.query(query);
  return result;
};

export const addWord = async (eng, kor) => {
  const query = `INSERT INTO words (eng, kor) VALUES (?,?)`;
  const [result] = await pool.query(query, [eng, kor]);
  const id = result.insertId;
  return await getWord(id);
};

export const editWord = async (eng, kor, id) => {
  const query = `UPDATE words SET eng = ?, kor= ? WHERE id = ?`;
  await pool.query(query, [eng, kor, id]);
  return await getAll();
};

export const deleteWord = async (id) => {
  const query = `DELETE FROM words WHERE id = ?`;
  await pool.query(query, [id]);
  return await getAll();
};

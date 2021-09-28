import pg from "pg";
import { sslConfig, connectionString } from "../config.js";

const pool = new pg.Pool({
  connectionString,
  ...sslConfig
});

export default pool;

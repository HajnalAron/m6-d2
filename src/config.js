const { DATABASE_URL, DATABASE_URL_DEV, NODE_ENV } = process.env;
const isProduction = NODE_ENV === "production";
export const connectionString = isProduction ? DATABASE_URL : DATABASE_URL_DEV;
export const sslConfig = isProduction
  ? {
      ssl: {
        rejectUnauthorized: false
      }
    }
  : {};

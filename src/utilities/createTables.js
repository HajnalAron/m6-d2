import pool from "./db.js";

const query = `
    -- DROP TABLE IF EXISTS products;
    CREATE TABLE IF NOT EXISTS 
        products(
            product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name VARCHAR (50) NOT NULL,
            description VARCHAR (255) NOT NULL,
            brand VARCHAR (50) NOT NULL,
            image_url TEXT NOT NULL,
            price FLOAT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        );
    -- DROP TABLE IF EXISTS review;
    CREATE TABLE IF NOT EXISTS
        review(
            review_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            comment VARCHAR (100) NOT NULL,
            rate INTEGER NOT NULL,
            product INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        );
`;

const createTables = async () => {
  try {
    await pool.query(query);
    console.log("Tables are created");
  } catch (error) {
    console.error(error);
    console.log("Tables are not created");
  }
};

export default createTables;

import pool from "../utilities/db";

export const getAllProducts = async () => {
  const query = `SELECT * FROM products`;
  const result = await pool.query(query);
  return result.rows;
};

export const getProductById = async (productId) => {
  let result;
  const productsQuery = `SELECT * FROM products WHERE product_id = ${productId}`;
  const productsResult = await pool.query(productsQuery);
  if (productsResult.rows.length > 0) {
    const product = productsResult[0];
    const reviewsQuery = `SELECT * FROM books WHERE product=${productId};`;
    const reviewsResult = await pool.query(reviewsQuery);
    const reviews = reviewsResult.rows;
    result = { product, reviews };
  } else {
    result = { message: `Product with ${productId} is not found.` };
  }
  return result;
};

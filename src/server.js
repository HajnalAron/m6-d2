import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import createTables from "./utilities/createtables.js";

const server = express();

const { PORT = 5000 } = process.env;

server.use(cors());
server.use(express.json());

server.listen(PORT, async () => {
  console.log("Server is listening on port " + PORT);
  await createTables();
});

listEndpoints(server);

server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});

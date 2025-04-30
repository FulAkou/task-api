import { VercelRequest, VercelResponse } from "@vercel/node";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors());

app.use(express.json());

const tasksHandler = require("./api/tasks").default;

app.all("/api/tasks", async (req: VercelRequest, res: VercelResponse) => {
  await tasksHandler(req, res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

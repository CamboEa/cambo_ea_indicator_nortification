import "dotenv/config";
import express from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.text());
registerRoutes(app);

export default app;

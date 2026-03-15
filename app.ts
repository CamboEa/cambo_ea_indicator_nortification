import "dotenv/config";
import express from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.static("public"));
registerRoutes(app);

export default app;

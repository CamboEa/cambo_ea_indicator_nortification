import "dotenv/config";
import express from "express";
import { PORT } from "./config";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.text());

registerRoutes(app);

app.listen(PORT, () => {
  console.log(`⚡ Signal Master Pro Relay running on port ${PORT}`);
  console.log(`🔗 Webhook URL: http://localhost:${PORT}/webhook`);
  console.log(`🧪 Test URL: http://localhost:${PORT}/test`);
});

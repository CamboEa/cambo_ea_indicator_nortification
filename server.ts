import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`⚡ Signal Master Pro Relay running on port ${PORT}`);
  console.log(`🔗 Webhook URL: http://localhost:${PORT}/webhook`);
  console.log(`🧪 Test URL: http://localhost:${PORT}/test`);
});

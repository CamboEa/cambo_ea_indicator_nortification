import type { Request, Response } from "express";
import type { Express } from "express";
import type { SignalData } from "./types";
import { formatBuyMessage, formatSellMessage, formatGenericMessage } from "./formatters";
import { sendTelegram } from "./telegram";
import { WEBHOOK_SECRET } from "./config";

export function registerRoutes(app: Express): void {
  app.get("/", (_req: Request, res: Response) => {
    res.json({
      status: "running",
      service: "Signal Master Pro — Telegram Relay (TypeScript)",
      endpoints: {
        "/webhook": "POST — TradingView webhook receiver",
        "/test": "GET — Send a test message to Telegram",
      },
    });
  });

  app.post("/webhook", async (req: Request, res: Response) => {
    try {
      let data: SignalData;

      if (typeof req.body === "string") {
        try {
          data = JSON.parse(req.body);
        } catch {
          data = { signal: "UNKNOWN", message: req.body };
        }
      } else {
        data = req.body;
      }

      console.log(`📩 Received webhook:`, JSON.stringify(data, null, 2));

      if (WEBHOOK_SECRET && data.secret !== WEBHOOK_SECRET) {
        console.log("⚠️ Invalid secret key");
        res.status(401).json({ error: "unauthorized" });
        return;
      }

      const signalType = (data.signal || "").toUpperCase();
      const message =
        signalType === "BUY"
          ? formatBuyMessage(data)
          : signalType === "SELL"
            ? formatSellMessage(data)
            : formatGenericMessage(data);

      const success = await sendTelegram(message);

      if (success) {
        res.json({ status: "ok", message: "sent to telegram" });
      } else {
        res.status(500).json({ status: "error", message: "telegram send failed" });
      }
    } catch (err) {
      console.error(`❌ Webhook error:`, err);
      res.status(500).json({ status: "error", message: String(err) });
    }
  });

  app.get("/test", async (_req: Request, res: Response) => {
    const testData: SignalData = {
      signal: "BUY",
      ticker: "BTCUSDT",
      timeframe: "1H",
      entry: "67,543.21",
      sl: "67,123.45",
      tp1: "67,963.00",
      tp2: "68,383.00",
      tp3: "68,803.00",
      rsi: "45.2",
      atr: "420.00",
      time: new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC",
    };

    const message = formatBuyMessage(testData);
    const success = await sendTelegram(message);

    if (success) {
      res.json({ status: "ok", message: "test message sent" });
    } else {
      res.status(500).json({ status: "error", message: "failed — check BOT_TOKEN and CHAT_ID" });
    }
  });
}

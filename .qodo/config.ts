export const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN_HERE";
export const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "YOUR_CHAT_ID_HERE";
export const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "";
export const PORT = parseInt(process.env.PORT || "5000", 10);
export const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

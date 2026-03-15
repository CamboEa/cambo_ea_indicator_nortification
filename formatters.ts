import type { SignalData } from "./types";

function defaultTime(data: SignalData): string {
  return data.time || new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";
}

export function formatBuyMessage(data: SignalData): string {
  const time = defaultTime(data);
  return [
    "🟢🟢🟢 *BUY SIGNAL* 🟢🟢🟢",
    "━━━━━━━━━━━━━━━━━━━━",
    `📊 *Pair:* \`${data.ticker || "N/A"}\``,
    `⏰ *Time:* \`${time}\``,
    `📈 *Timeframe:* \`${data.timeframe || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    `💰 *Entry Price:* \`${data.entry || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    `🛑 *Stop Loss:* \`${data.sl || "N/A"}\``,
    `🎯 *TP1 (1:1):* \`${data.tp1 || "N/A"}\``,
    `🎯 *TP2 (2:1):* \`${data.tp2 || "N/A"}\``,
    `🎯 *TP3 (3:1):* \`${data.tp3 || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    `📉 *RSI:* \`${data.rsi || "N/A"}\``,
    `📏 *ATR:* \`${data.atr || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    "⚡ _Signal Master Pro_",
  ].join("\n");
}

export function formatSellMessage(data: SignalData): string {
  const time = defaultTime(data);
  return [
    "🔴🔴🔴 *SELL SIGNAL* 🔴🔴🔴",
    "━━━━━━━━━━━━━━━━━━━━",
    `📊 *Pair:* \`${data.ticker || "N/A"}\``,
    `⏰ *Time:* \`${time}\``,
    `📈 *Timeframe:* \`${data.timeframe || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    `💰 *Entry Price:* \`${data.entry || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    `🛑 *Stop Loss:* \`${data.sl || "N/A"}\``,
    `🎯 *TP1 (1:1):* \`${data.tp1 || "N/A"}\``,
    `🎯 *TP2 (2:1):* \`${data.tp2 || "N/A"}\``,
    `🎯 *TP3 (3:1):* \`${data.tp3 || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    `📉 *RSI:* \`${data.rsi || "N/A"}\``,
    `📏 *ATR:* \`${data.atr || "N/A"}\``,
    "━━━━━━━━━━━━━━━━━━━━",
    "⚡ _Signal Master Pro_",
  ].join("\n");
}

export function formatGenericMessage(data: SignalData): string {
  return [
    "⚡ *TRADING ALERT* ⚡",
    "━━━━━━━━━━━━━━━━━━━━",
    `\`\`\`\n${JSON.stringify(data, null, 2)}\n\`\`\``,
  ].join("\n");
}

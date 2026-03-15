import { CHAT_ID, TELEGRAM_API } from "./config";

export async function sendTelegram(message: string, chatId?: string): Promise<boolean> {
  const targetChat = chatId || CHAT_ID;
  try {
    const res = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: targetChat,
        text: message,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`❌ Telegram error ${res.status}: ${err}`);
      return false;
    }

    console.log(`✅ Telegram message sent to ${targetChat}`);
    return true;
  } catch (err) {
    console.error(`❌ Telegram send failed:`, err);
    return false;
  }
}

import { Telegraf } from "telegraf";
import fs from "node:fs";

const bot = new Telegraf(Deno.env.get("BOT_TOKEN"));

const path = "/webhook";
const domain = "https://eternima-20-eternima-gu-40.deno.dev";

bot.on("new_chat_members", async (ctx) => {
  try {
    const user = ctx.message.new_chat_members[0];
    await ctx.replyWithPhoto(
      { source: "./00.jpg" },
      {
        caption: `🌐 Welcome ${user.first_name} to Eternima — The Human Legacy Network!`,
        parse_mode: "Markdown",
      }
    );
    console.log("✅ Welcome message sent to", user.first_name);
  } catch (err) {
    console.error("❌ Welcome message error:", err.response?.description || err.message);
  }
});

bot.startWebhook(path, null, domain + path);
console.log("🌍 Eternima Guard webhook active at " + domain + path);

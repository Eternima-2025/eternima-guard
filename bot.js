import { Telegraf } from 'telegraf';
import fs from 'fs';

const bot = new Telegraf('8060917920:AAHgpKCLeHpkAOWuzSIF2Y4Rv2TD-M4JD58');

bot.on('new_chat_members', async (ctx) => {
  try {
    const user = ctx.message.new_chat_members[0];
    await ctx.replyWithPhoto(
      { source: '/Users/naty80/Desktop/00.jpg' },
      {
        caption: `🚀 Welcome ${user.first_name} to *Eternima – The Human Legacy Network* 🚀

You are now part of a global mission to preserve true identity and eternal value.

Please be respectful to others and uphold the spirit of legacy and integrity in every interaction.`,
        parse_mode: 'Markdown'
      }
    );
    console.log("✅ Welcome message sent to", user.first_name);
  } catch (err) {
    console.error("❌ Welcome message error:", err.response?.description || err.message);
  }
});

bot.launch();
console.log("🤖 Eternima Guard is now running...");

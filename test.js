import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import fs from 'fs';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.telegram.sendPhoto(
  process.env.TEST_CHAT_ID,
  { source: '/Users/naty80/Desktop/00.jpg' },
  {
    caption: `🚀 Welcome Test User to Eternima – The Human Legacy Network 🚀

You are now part of a global mission to preserve true identity and eternal value.

Please be respectful to others and uphold the spirit of legacy and integrity in every interaction.`,
    parse_mode: 'Markdown'
  }
).then(() => console.log('✅ Test message sent successfully.'))
 .catch(err => console.error('❌ Error sending test message:', err.message));

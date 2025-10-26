import { Telegraf } from "telegraf";

const bot = new Telegraf(Deno.env.get("BOT_TOKEN"));

bot.on("new_chat_members", async (ctx) => {
  const user = ctx.message.new_chat_members[0];
  await ctx.reply(`Welcome ${user.first_name} to Eternima - The Human Legacy Network!`);
});

bot.launch();
console.log("Eternima Guard running safely");

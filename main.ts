import { Bot } from "https://deno.land/x/grammy/mod.ts";

const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN not found");

const bot = new Bot(token);

bot.command("start", (ctx) => ctx.reply("Eternima Guard is active."));

bot.start();
console.log("Eternima Guard Bot running on Deno Deploy.");


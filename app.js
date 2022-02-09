const { Telegraf } = require('telegraf');

const bot = new Telegraf('5177595311:AAGsqNqj_ps9ny3nV-QWw9oktOFyf5JlMeU');

bot.start(ctx => {
  console.log('START');
  ctx.reply('Welcome');
});
bot.help(ctx => ctx.reply('Send me a sticker'));
bot.on('sticker', ctx => ctx.reply('👍'));
bot.hears('hi', ctx => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

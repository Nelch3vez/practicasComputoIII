const { Telegraf } = require("telegraf");
const bot = new Telegraf("5397265774:AAH-Onz8ZRNHJJ8ZZrED-VQLjYyu0UJ29Ss");

bot.start((ctx) => {
    ctx.reply('Programación Computacional IV, Bienvenido ${ctx.from.first_name}');

});

//comando personalizado 
bot.command(['Saludar', 'Saludo', 'Hola'], (ctx) => {
    ctx.reply("Buenos Dias");

});

bot.on('sticker', (ctx) => {
    ctx.reply("Buen sticker");

});

bot.launch();
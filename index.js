const { Telegraf } = require('telegraf'); // import package as a object
const { message } = require('telegraf/filters'); // import it for messaging
const axios = require('axios'); // for fetch the data from links


/* 
Now you need a bot token to create a new bot.
you will get bot token from a bot called botfather that belongs to telegram.
open botfather bot 
create a new bot using given bot commands
after creating a new bot you will get bot token .
userName or link of out bot is --> t.me/coding_bot_for_node_bot
*/

const bot = new Telegraf(process.evn.'6558825453:AAGhA8Sh78feuM8eZ0bsshXAgzVXEdoQKGU'); // create a new bot object and pass that token

// this token is nothing just a api key

// we can hide our token from the public using a function --> process.env'token'


// for now our bot is empty lets configure it

bot.start((ctx) => ctx.reply('Welcome,This coding bot belongs to Ritik')); // it reply when someone start our bot

bot.on(message('sticker'), (ctx) => ctx.reply('🫵')); // when someone sent a sticker to the bot


bot.command('array', async function (ctx){ // normal code & concept about the array
    let responce = await axios.get('https://gist.githubusercontent.com/adaptives/1106635/raw/bf9711c001aef64b65193618b397bb30a9a47f38/JavaArrays.java');
    //console.log(responce.data);
    return ctx.reply(responce.data);
})


bot.launch(); // the functionalities works only when this file is in running state and bot.launch() function helps us to runing the file continiously and it never ends , means it will help us to stablish a connection between our file and telegram servers.


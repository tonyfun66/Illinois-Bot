const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const Discord = require("discord.js");
const superagent = require("superagent")



const bot = new Discord.Client({disableEveryone: true});

require("./util/eventHandler")(bot)


const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

   if(err) console.log(err)

   let jsfile = files.filter(f => f.split(".").pop() === "js")
   if(jsfile.length <= 0) {
      return console.log("[LOGS] Coulden't Find Commands!");
   }

   jsfile.forEach((f, i) => {
       let pull = require(`./commands/${f}`) ;     
       bot.commands.set(pull.config.name, pull); 
       pull.config.aliases.forEach(aliases => {
           bot.aliases.set(aliases, pull.config.name)
       });
   });
});


bot.on("message", async  message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);





    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)



})

bot.login(botconfig.token);
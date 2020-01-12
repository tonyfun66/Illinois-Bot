const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I am broken! Try again.")

    let cEmbed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setAuthor(`Illionis Cats`, message.guild.iconURL)
    .setImage(body.file)
    .setTimestamp()
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL)

    message.channel.send({embed: cEmbed});

    msg.delete();
}


module.exports.config = {
    name: "cat",
    aliases: [],
    description: "To get a picture of a cat",
}
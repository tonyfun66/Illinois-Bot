const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`http://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I am broken! Try again.")

    let dEmbed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setAuthor(`Illionis Dogs`, message.guild.iconURL)
    .setImage(body.message)
    .setTimestamp()
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL)

    message.channel.send({embed: dEmbed});

    msg.delete();
}


module.exports.config = {
    name: "dog",
    aliases: [],
    description: "To get a picture of A dog",
}
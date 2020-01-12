const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("**LETI ENROLLMENT OPEN**")
    .setDescription("**LETI CLASS 1 INTAKE DATE:**")
    .setThumbnail(message.channel.iconURL)
    .addField("**__Enroll Date:__**", `**Sunday January 11, 2020**`, )
    .addField("**__Application:__**", `https://forms.gle/L84vQXVbJMUZ4niu6`, )
    .addField("**__Close Date:__**", `**Tuesday January 13, 2020**`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: fEmbed});
}


module.exports.config = {
    name: "leti",
    aliases: [],
    description: "Shows LETI's enrollment dates.",
}
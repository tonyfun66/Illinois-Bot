const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("**Main Updates**")
    .setThumbnail(message.channel.iconURL)
    .addField("**Discord Bot:**", `We now have a working bot -- Not 24/7`, )
    .addField("**Rank & Shout Bot?**", `yescaptuer has created a bot that can rank people in the group and make group shouts, These commands are only available to the people that have the 2 roles.`, )
    .addField("**Old Game Map?**", `**The development team are keen to get the old map back and will be back soon.**`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: fEmbed});
}


module.exports.config = {
    name: "mainupdates",
    aliases: [],
    description: "N/A",
}
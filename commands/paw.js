const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let pEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("PAW Recruitment")
    .setThumbnail(message.channel.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Recruitment Status:**", `Open`, )
    .addField("**Application Link:**", `https://docs.google.com/forms/d/e/1FAIpQLSc4u7udTGq_UFfxUHHyX6BXO8yJ-0gr_xTZAR8XZgNVNeLUEg/viewform`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: pEmbed});
}


module.exports.config = {
    name: "paw",
    aliases: [],
    description: "PAW Recruitment status",
}
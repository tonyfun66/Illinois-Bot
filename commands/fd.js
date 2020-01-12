const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let lEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("FD Recruitment")
    .setThumbnail(message.channel.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Recruitment Status:**", `Closed`, )
    .addField("**Application Link:**", `N/A`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: lEmbed});
}


module.exports.config = {
    name: "fd",
    aliases: [],
    description: "fd Recruitment status",
}
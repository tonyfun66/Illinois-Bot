const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("ICF Recruitment")
    .setThumbnail(message.channel.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Recruitment Status:**", `Open`, )
    .addField("**Application Link:**", `https://forms.gle/xDCWvNcP32Lw4Yic6`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: fEmbed});
}


module.exports.config = {
    name: "icf",
    aliases: [],
    description: "ICF Recruitment status",
}
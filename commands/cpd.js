const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let cEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("CPD Recruitment")
    .setThumbnail(message.channel.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Recruitment Status:**", `Open`, )
    .addField("**Application Link:**", `https://forms.gle/9WabgrjKnKVjjW7T7`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: cEmbed});
}


module.exports.config = {
    name: "cpd",
    aliases: [],
    description: "CPD Recruitment status",
}
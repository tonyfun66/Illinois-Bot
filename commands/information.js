const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let iEmbed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setTitle("Links & Information")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Illionis Group**", `https://www.roblox.com/groups/5311485/State-Of-Illinois-State-Roleplay#!/about`, )
    .addField("**Main Discord**", `https://discord.gg/wUqb2ur`, )
    .addField("**LETI Discord**", `https://discord.gg/N49QMD4`, )
    .addField("**National Guard**", `https://discord.gg/DUgmy7x`, )
    .addField("**Chicago Police Department**", `https://discord.gg/Bzse9hM`, )
    .addField("**Cook County Sheriff's Office**", `https://discord.gg/dfmXcwT`, )
    .addField("**Illinois Law Enforcement Training Institute**", `https://discord.gg/xMGHzm4`, )
    .addField("**Illinois State Police**", `https://discord.gg/FQTJCfc`, )
    .addField("**Chicago News Station**", `https://discord.gg/dEPCEyn`, )
    .addField("**Cook County Forest Preserve Police**", `https://discord.gg/pKn7rBT`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: iEmbed});
}


module.exports.config = {
    name: "info",
    aliases: [],
    description: "Information on all the discords.",
    
}
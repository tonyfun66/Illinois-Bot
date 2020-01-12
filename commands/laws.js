const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let iEmbed = new Discord.RichEmbed()
    .setColor(colours.purple_Dark)
    .setTitle("Goverment Bills")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Department Formation Bill**", `https://docs.google.com/document/d/1iQS19WBMBaZg_lHzkCTzu0yzqouJ-rsa26VfrcS4vDg`, )
    .addField("**Licensing Enactment Bill**", `https://docs.google.com/document/d/1c7_sW72mgMIGSn3Ee0zZQBOQMm-tPwXgHquS0ESvh08`, )
    .addField("**Updated Firearms Bill**", `https://docs.google.com/document/d/1_FUeh_PLgq5um7A5MuIavHbPdDbj6-UHMsbN3Oq1syc`, )
    .addField("**Waterway Opening Bill**", `https://docs.google.com/document/d/1OvIl5p66gPya3kTRCeGXO8a0TiIEdGKjVL7C4j0p9E4`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: iEmbed});
}


module.exports.config = {
    name: "bills",
    aliases: [],
    description: "The laws of illinois",
    
}
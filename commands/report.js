const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Coulden't Find User.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason)
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);


    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Coulden't Find the Reports Channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}


module.exports.config = {
    name: "report",
    aliases: [],
    description: "To report someone.",
    
}
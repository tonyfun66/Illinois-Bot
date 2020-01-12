const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Coulden't Find User.");
    let reason = args.join(" ").slice(22);

    let bEmbed = new Discord.RichEmbed()
    .setDescription("Blacklisted")
    .setColor(colours.gold)
    .addField("Blacklisted User", `${rUser} with ID: ${rUser.id}`)
    .addField("Blacklisted By", `${message.author} with ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", reason)
    .addField("Proof", reason)
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);


    let blacklistedchannel = message.guild.channels.find(`name`, "blacklisted");
    if(!blacklistedchannel) return message.channel.send("Coulden't Find the Blacklisted Channel.");


    message.delete().catch(O_o=>{});
    blacklistedchannel.send(bEmbed);
}


module.exports.config = {
    name: "blacklist",
    aliases: [],
    description: "To blacklist a user",
    
}
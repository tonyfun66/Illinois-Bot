const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find User!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have the required Permissions!")
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("Banned Member")
    .setDescription("~Ban~")
    .setColor("colors.cyan")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `${message.author} with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");


    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}


module.exports.config = {
    name: "ban",
    aliases: [],
    description: "To ban a player",
    usage: "!ban <@user> <reason>",
}
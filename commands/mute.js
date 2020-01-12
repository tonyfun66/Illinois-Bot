const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") ||!message.guild.owner) return message.channel.send("You don't have the correct permissions! Contact the owner if yu think this is a mistake")
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to ass roles!")
    
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!mutee) return message.channel.send("Please specify a user.")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No Reason Given"

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#514f48",
                permissions: []
             })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
    } catch(e) {
        console.log(e.stack);
    }
}


mutee.addRole(muterole.id).then(() => {
    message.delete()
        mutee.send(`Hello, you have been muted in ${message.guild.name} for: ${reason}`)
        message.channel.send(`${mutee.user.username} was successfully muted.`)
    })


    let membed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setAuthor(`${message.guild.name} incidents`, message.guild.iconURL)
    .setField("Moderation", "mute")
    .addField("Mutee:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt)

    let sChannel = message.guild.channels.find(c => c.name === "incidents")
    sChannel.send(membed)
}

module.exports.config = {
    name: "mute",
    aliases: [],
    description: "Mutes a member in the discord",
    usage: "!mute <@user> <reason>",
}
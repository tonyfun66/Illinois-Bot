const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.purple_medium)
    .setTitle("Server Rules")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Rule 1: Bullying & Abuse is prohibited**", `We have a zero-tolerance policy regarding bullying & abuse. Any abuse or bullying can be reported by contacting a Server Moderator or Server Administrator.`, )
    .addField("**Rule 2: Advertising**", `Advertising any other community, business, clan, discord, social media, etc is prohibited within this server without written consent from the Moderation team.`, )
    .addField("**Rule 3: Spam**", `Spamming the server (including emojis, chat, mic, sending multiple messages in a row and misuse of spoiler function) is prohibited within this server.`, )
    .addField("**Rule 4: Inappropriate Content**", `Posting any inappropriate content including NSFW: nude imagery, sexualized discussion, excessive cursing, pornographic material, etc is prohibited.`, )
    .addField("**Rule 5: Excessive Tagging**", `It is not required, or encouraged that you @mention someone every time you talk to them in a new line of your conversation. Excessive tagging of a user is prohibited. `, )
    .addField("**Rule 6: No mic-spam/kinect mics**", `Soundboards, screaming, playing loud music or loud background noises are prohibited in this server It is annoying, and disturbing, and shall not be tolerated. `, )
    .addField("**Rule 7: Proper Channels**", `Proper channels should be used at all times. Music bot should only be used in Primary (vc) and commands used in Bot Commands.`, )
    .addField("**Rule 8: Impersonation:**", `Impersonating a Moderator, Developer or Owner is prohibited as this can be a deliberate act to take advantage of someone, please ensure your Discord name contains your Roblox name at all times.`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "rules",
    aliases: [],
    description: "Displays Rules",
}
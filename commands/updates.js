const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("Updates")
    .setThumbnail(message.channel.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**#1: New Bot Commands**", `We have made a bunch of new commands such as Recruitment status and links for it do !help for all the commands.`, )
    .addField("**#2 Going back to the old map**", `There was a poll to go back to the old map and it was a success for the poll, The developers now need to add it.! Proof: https://prnt.sc/qmmosv`, )
    .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "updates",
    aliases: [],
    description: "To get information on yourself.",
}
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] === "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor(`Illinois Bot`, message.guild.iconURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor(colours.redlight)
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(`Illionis Bot`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable command for the Illionis bot!\nThe bot prefix is: ${prefix}`)
        .addField(`Commands:`, "``cat`` ``dog`` ``serverinfo`` ``userinfo`` ``mute`` ``rules`` ``info`` ``report`` ``updates`` ``paw`` ``isp`` ``iso`` ``fd`` ``cpd`` ``leti`` ``icf``")
        .setFooter(`Illinois Bot | Created by tonyfun66`, bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: [],
    usage: "!usage",
    Description: "The help command.",
}
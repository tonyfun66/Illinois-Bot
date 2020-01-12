const Discord = require("discord.js")


module.exports = bot => {


    console.log(`${bot.user.username} is online`)

    let statuses = [
        `${bot.guilds.size}`,
        "!help",
        `over ${bot.users.size} users!`
    ]


    setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
}
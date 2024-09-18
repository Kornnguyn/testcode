module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("Manage_Channels")) return message.reply("không thích");
    if(!args[0]) return return message.reply("không thích");
    if(parseInt(args[0]) > 200) return message.reply("không thích");

    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        message.channel.send('Cleared ${args[0]} messages!');
    }).catch((err) => {
        return message.reply("không thích!");
    })
}

module.exports.helps = {
    name: "clear"
    aliases: []
}
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("note")
        .setDescription("Рандомайзер игр"),
    async execute(bot, message, args, argsF) {
        if (args[0] == "open") {
            const notes = bot.Memory.users[message.author.id].notes.join(" ");
            return message.reply({
                embeds: [
                    {
                        title: "Список игр",
                        description: notes,
                    },
                ],
            });
        }

        const content = argsF.join(" ");
        bot.Memory.users[message.author.id].notes.push(content);
        return message.reply("Игра добавлена");
    },
};

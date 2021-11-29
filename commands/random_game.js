const { SlashCommandBuilder } = require("@discordjs/builders");
const DiscordJS = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("game")
        .setDescription("Game random"),
    async execute(interaction) {
        await interaction.reply("Введите игры", (message) => {
            const questions = [
                "Введи игру",
                "Может еще?",
                "Давай еще одну",
                "Ласт игра",
            ];
            let counter = 0;
            const filter = (m) => m.author.id === message.author.id;

            const collector = new DiscordJS.MessageCollector(
                message.channel,
                filter,
                {
                    max: questions.length,
                    time: 1000 * 30,
                },
            );

            message.channel.send(questions[counter++]);
            collector.on("collect", (m) => {
                if (counter < questions.length) {
                    m.channel.send(questions[counter++]);
                }
            });

            collector.on("end", (collected) => {
                console.log(`Collected ${collected.size} messages`);
                let counter = 0;
                collected.forEach((value) => {
                    console.log(questions[counter++], value.content);
                });
            });
        });
    },
};

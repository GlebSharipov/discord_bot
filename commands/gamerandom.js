const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gamerandom")
        .setDescription("Подбор игры пацанам"),
    async execute(interaction) {
        await interaction.reply("I am waiting for your games");

        const filter = (m) => m.content.includes("!");
        const collector = interaction.channel.createMessageCollector({
            filter,
            time: 15000,
        });
        const array = [];
        collector.on("collect", (m) => {
            console.log(`Collected ${m.content}`);
            array.push(m.content);
        });

        collector.on("end", (collected) => {
            console.log(`Collected ${collected.size} items`);
            const random = array[Math.floor(Math.random() * array.length)];
            const resultingGame = random.slice(1).toUpperCase();
            return interaction.followUp(`Ваша игра: ${resultingGame}`);
        });
    },
};

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("game")
        .setDescription("Game random"),
    async execute(interaction) {
        await interaction.reply("Введите игры");

        const filter = (m) => m.content.includes("!");
        // const args = content.slice(length).split(/ +/);
        // args.shift().toLowerCase();
        // console.log("что то напичетал: ", args);

        const collector = interaction.channel.createMessageCollector({
            filter,
            time: 30000,
        });
        // console.log("это коллектор: ", collector);

        collector.on("collect", (m) => {
            console.log(`Collected ${m.content}`);
        });

        collector.on("end", (collected) => {
            console.log(`Collected ${collected.size} items`);
        });
        console.log("Это коллеукция:", collected);
        // return "Вот ваша игра:", collection.random();
    },
};

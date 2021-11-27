const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("server").setDescription("lsjgsdg"),
    async execute(interaction) {
        await interaction.reply("server!");
    },
};

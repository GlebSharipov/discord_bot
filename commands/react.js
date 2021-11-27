const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("react").setDescription("ass"),
    async execute(interaction) {
        const message = await interaction.reply({
            content: "You can react with Unicode emojis!",
            fetchReply: true,
        });
        message.react("👍");
    },
};

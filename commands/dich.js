const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const row = new MessageActionRow().addComponents(
    new MessageButton()
        .setLabel("Стрим большого носа")
        .setURL("https://www.twitch.tv/dichennn")
        .setStyle("LINK")
        .setEmoji("💩"),
);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("дичь")
        .setDescription("Наш друг Дичен запустил стрим"),
    async execute(interaction) {
        await interaction.reply({
            content: "Про ксер вышел на связь",
            ephemeral: false,
            components: [row],
        });
    },
};

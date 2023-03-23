const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('user details'),
    async execute(interaction) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        await interaction.reply(`${hours}:${minutes}:${seconds}`+' | '+interaction.user.username.toString());
    },
}

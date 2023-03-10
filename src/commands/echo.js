const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('echo a message')
        .addStringOption(option => 
            option.setName('target')
                .setDescription("Some argument")),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('target'));
    },
}
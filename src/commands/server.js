const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('server details'),
    async execute(interaction) {
        await interaction.reply('Name : '+interaction.member.guild.name+' | Members : '+interaction.member.guild.memberCount.toString());
    },
}

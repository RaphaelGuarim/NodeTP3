const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update_state_watchlist')
        .setDescription('Update item on Watchlist')
        .addStringOption(option => 
            option
                .setName('iditem')
                .setDescription('iditem')
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName('idwatchlist')
                .setDescription('idwatchlist')
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName('option')
                .setDescription('option')
                .setRequired(true)
                .addChoices(
                    { name: 'A voir', value: 'A voir' },
                    { name: 'En cours', value: 'En cours' },
                    { name: 'Terminé', value: 'Terminé' },
                    { name: 'Abandonné', value: 'Abandonné' },
                )),
    async execute(interaction) {
        const idItem = interaction.options.getString('iditem');
        const idWatchlist = interaction.options.getString('idwatchlist');
        const option = interaction.options.getString('option');
        axios.patch("http://localhost:3000/watchlist/updateItem?itemID=" + idItem + "&watchlistID=" + idWatchlist + "&state=" + option);
        const validateEmbed = new EmbedBuilder()
            validateEmbed.setColor("#00F000")
            validateEmbed.addFields({name:"State updated", value : " "})
        await interaction.channel.send({embeds: [validateEmbed]});
    },
}
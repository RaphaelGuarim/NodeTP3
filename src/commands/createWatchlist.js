const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_watchlist')
        .setDescription('get a movie')
        .addStringOption(option =>
            option.setName('proprietaire')
              .setDescription('proprietaire utilisateur'))
        .addStringOption(option =>
            option.setName('libelle')
              .setDescription('libelle utilisateur')),
    async execute(interaction) {
        const proprietaire= interaction.options.getString('proprietaire');
        const libelle = interaction.options.getString('libelle');
        axios.post("http://localhost:3000/watchlist/createWatchlist?proprietaire=" + proprietaire + "&libelle=" + libelle+"")
        await interaction.reply(`the watchlist is created`);
    },
}

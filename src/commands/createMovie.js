const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_movie')
        .setDescription('get a movie')
        .addStringOption(option =>
            option.setName('title')
              .setDescription('title utilisateur'))
        .addStringOption(option =>
            option.setName('year')
              .setDescription('year utilisateur'))
        .addStringOption(option =>
            option.setName('imdbid')
              .setDescription('ImdbId utilisateur')),
    async execute(interaction) {
        const title = interaction.options.getString('title');
        const year = interaction.options.getString('year');
        const ImdbId = interaction.options.getString('imdbid');
        axios.post("http://localhost:3000/item/createItem?title=" + title + "&year=" + year + "&ImdbId=" + ImdbId+"")
        await interaction.reply(`The Movie is Created`);
    },
}

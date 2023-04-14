const { SlashCommandBuilder } = require('discord.js')
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_user')
        .setDescription('get a movie')
        .addStringOption(option =>
            option.setName('nom')
              .setDescription('nom utilisateur'))
        .addStringOption(option =>
            option.setName('prenom')
              .setDescription('prenom utilisateur'))
        .addStringOption(option =>
            option.setName('email')
              .setDescription('email utilisateur')),
    async execute(interaction) {
        const nom = interaction.options.getString('nom');
        const prenom = interaction.options.getString('prenom');
        const email = interaction.options.getString('email');
        axios.post("http://localhost:3000/user/createUser?name=" + nom + "&firstName=" + prenom + "&email=" + email+"")
        await interaction.reply(`The User is created`);
    },
}

const { SlashCommandBuilder } = require('discord.js')
const subcommand = require('./user.js');
const subcommand2 = require('./server.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('server or user')
        .addStringOption(option => 
            option.setName('targets')
                .setDescription("Choice of the command")),
    async execute(interaction) {
        if (interaction.options.getString('targets')=='server'){
            subcommand2.execute(interaction);
        }else if (interaction.options.getString('targets')=='user'){
            subcommand.execute(interaction);
        }else{
            await interaction.reply('Erreur sur la commande : /'+interaction.options.getString('targets'));
        }
    },
}
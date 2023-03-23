const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('server or user')
        .addStringOption(option => 
            option.setName('targets')
                .setDescription("Choice of the command")),
    async execute(interaction) {
        if (interaction.options.getString('targets')=='server'){
            console.log("SERVEUR");
        }else if (interaction.options.getString('targets')=='user'){
            console.log("USER");
        }else{
            console.log("Erreur dans la commande")
        }
        await interaction.reply(interaction.options.getString('targets'));
    },
}

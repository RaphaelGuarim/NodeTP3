const { request } = require('undici')
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js')
const { BufferList } = require('bl');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_user')
        .setDescription('get all users'),
    async execute(interaction) {
        const Result = await request('http://localhost:3000/user/getUser')
        const data = await new Promise((resolve, reject) => {
            const bl = new BufferList();
            Result.body.on('data', chunk => bl.append(chunk));
            Result.body.on('end', () => resolve(bl.toString()));
            Result.body.on('error', error => reject(error));
        });
        const parsedData = JSON.parse(data);
        let embed = new EmbedBuilder()
            embed.setColor('#00F000')
            embed.setTitle("Liste des utilisateurs")
            embed.setDescription("Liste des utilisateurs")

        parsedData.forEach(element => {
            embed.addFields(
                {
                    name:"nom: " + element.name + " \nprenom :" + element.firstName + ", \nemail : " + element.email, 
                    value: "\n id : " + element.userID , 
                    inline: false,
                })
        });
        interaction.reply({embeds: [embed]})        
    },
}

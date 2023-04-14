const { request } = require('undici')
const { SlashCommandBuilder,EmbedBuilder } = require('discord.js')
const { BufferList } = require('bl');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_item')
        .setDescription('get all items'),
    async execute(interaction) {
        const Result = await request('http://localhost:3000/item/getItem')
        const data = await new Promise((resolve, reject) => {
            const bl = new BufferList();
            Result.body.on('data', chunk => bl.append(chunk));
            Result.body.on('end', () => resolve(bl.toString()));
            Result.body.on('error', error => reject(error));
        });
        const parsedData = JSON.parse(data);
        let embed = new EmbedBuilder()
            embed.setColor('#F00000')
            embed.setTitle("Liste des films")
            embed.setDescription("Liste des films")

        parsedData.forEach(element => {
            embed.addFields(
                {
                    name:"Titre : " + element.title + " \nAnnée :" + element.year + ", \nPays : " + element.country+ ", \nGenre : " + element.genre + ", \nLangue : " + element.language,
                    value: "\n id : " + element.itemId , 
                    inline: false,
                })
        });
        interaction.reply({embeds: [embed]})        
    },
}

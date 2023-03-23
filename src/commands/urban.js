const { request } = require('undici')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Quoi'),
    async execute(interaction) {
        const Result = await request('https://api.urbandictionary.com/v0/define?quoicoubeh')
        const { file } = await Result.body.json()
        console.log(Result);
        await interaction.reply({ files: [file] })
    },
}

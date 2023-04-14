const { request } = require('undici')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('miaou'),
    async execute(interaction) {
        const catResult = await request('https://aws.random.cat/meow')
        const { file } = await catResult.body.json()
        await interaction.reply({ files: [file] })
    },
}

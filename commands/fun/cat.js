const { SlashCommandBuilder } = require("discord.js");
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder ()
        .setName('cat')
        .setDescription('fetches a random cat image'),
    async execute(interaction) {
        const catResult = await request('https://cataas.com/cat');
        await interaction.reply({ content:'Fetching a cat right meow!', fetchReply: true });
        console.log('response received', catResult.statusCode);
    },
};

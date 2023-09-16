const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Provides information the weather in a given zipcode'),
    async execute(interaction) {
        await interaction.reply(`Looks like rain, you should grab an umbrella :umbrella:.`);
    },
};
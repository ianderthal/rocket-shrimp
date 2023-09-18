const { SlashCommandBuilder } = require("discord.js");
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder ()
        .setName('cat')
        .setDescription('fetches a random definition of a cat'),
    async execute(interaction) {
        const catResult = await request('https://api.urbandictionary.com/v0/define?term=cat');
        await interaction.reply({ content:'Fetching the definition of a cat right meow!', fetchReply: true });

        const { list } = await catResult.body.json();
        //console.log('data', await catResult.body.json());
        if (!list.length) {
		    return interaction.editReply(`No results found for your request.`);
		}
        interaction.editReply(`**Definition of a cat**: ${list[(Math.floor(Math.random() *  list.length))].definition}`);
    },
};

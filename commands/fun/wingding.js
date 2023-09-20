const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder ()
        .setName('/wingding')
        .setDescription('Replies with where we can find wingdings!'),
    async execute(interaction) {
        await interaction.reply('Wingdings are here!');
    },
};

//fetch rss feed
//search for keyword
//return the meal and location for the meal


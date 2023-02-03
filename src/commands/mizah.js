const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../config.js");
const request = require("request")

module.exports = {
    data: new SlashCommandBuilder()
      .setName("meme")
      .setDescription("Rastgele bir meme oluşturur"),
      run: async (client, interaction) => {
        request({
            url: "https://meme-api.com/gimme",
            json: true
        }, (err, response, body) => {
            let url = body.url  

            const meme = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Mizah')
            .setImage(`${url}`)
            interaction.reply({ embeds: [meme] });
        })
    }
};

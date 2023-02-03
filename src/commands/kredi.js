const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../config.js");
const { MineXON } = require("minexon.js");

const minexon = new MineXON({
    apiKey: config.minexonapikey,
    apiURL: config.minexonapiurl
})


module.exports = {
  data: new SlashCommandBuilder()
    .setName("kredi")
    .setDescription("kredi")
    .addStringOption(option =>
      option.setName('isim')
        .setDescription('Kullanıcının adını girin')
        .setRequired(true)),
    run: async (client, interaction) => {
      const isim = interaction.options.getString('isim')
    
      let AccountInfo = await minexon.getAccountInfo({
        username: isim
     });
    if (AccountInfo.credit == undefined ){
      interaction.reply(`Öyle bir oyuncu bulunamadı üzgünüm :(`)
    }
   else {
    interaction.reply(`**${isim}** Adlı oyuncunun **${AccountInfo.credit}** miktarında kredisi var`)
    }
}};

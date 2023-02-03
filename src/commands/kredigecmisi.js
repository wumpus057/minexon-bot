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
    .setName("kredigecmisi")
    .setDescription("kredigecmisi"),
    run: async (client, interaction) => {    
      let creditHistory = await minexon.getCreditHistory({
        size: 5
    });
    try {
     let amount = creditHistory[0].amount
     let username = creditHistory[0].username

     let amount1 = creditHistory[1].amount
     let username1 = creditHistory[1].username

     let amount2 = creditHistory[2].amount
     let username2 = creditHistory[2].username

     let amount3 = creditHistory[3].amount
     let username3 = creditHistory[3].username

     let amount4 = creditHistory[4].amount
     let username4 = creditHistory[4].username

     const kredigecmisiembed = new EmbedBuilder()
     .setColor(0x0099FF)
     .setTitle('Kredi Geçmişi')
     .setDescription('Burada Toplam son 5 kişinin kredi geçmişi bulunur')
     .addFields(
      { name: `${username}`, value: `Toplam yüklenen kredi miktarı **${amount}**` },
      { name: `${username1}`, value: `Toplam yüklenen kredi miktarı **${amount1}**` },
      { name: `${username2}`, value: `Toplam yüklenen kredi miktarı **${amount2}**` },
      { name: `${username3}`, value: `Toplam yüklenen kredi miktarı **${amount3}**` },
      { name: `${username4}`, value: `Toplam yüklenen kredi miktarı **${amount4}**` },
    )
      interaction.reply({ embeds: [kredigecmisiembed] });
    }
    catch {
      interaction.reply("Geçmişi okuyabilmem için 5 kullanıcının kredi yüklemesi gerekiyor")
    }
 }};

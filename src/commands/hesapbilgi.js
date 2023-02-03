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
        .setName("hesapbilgi")
        .setDescription("Girilen hesabın bilgilerini verir")
        .addStringOption(option => option.setName('isim')
            .setDescription('Kullanıcının adını girin')
            .setRequired(true)),
    run: async (client, interaction) => {

        const player = interaction.options.getString('isim')

        let AccountInfo = await minexon.getAccountInfo({
            username: player
        })
        try {
        const mcskin = "https://minotar.net/helm/"+ player +"/600.png";
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Hesap Bilgi')
            .setAuthor({ name: player, iconURL: `${mcskin}` })
            .setDescription(`${player} adlı kullanıcının hesap bilgileri.`)
            .addFields(
                { name: "Toplam kredi miktarı", value: AccountInfo.credit },
                { name: "Kullanıcının kayıt olduğu tarih", value: AccountInfo.registerDate },
                { name: "Kullanıcının en son giriş yaptığı tarih", value: AccountInfo.lastLogin }
            )
        interaction.reply({ embeds: [embed] });
            }
        catch
        {
            interaction.reply("iyi güzel diyorsunda öyle bir oyuncu yok baba")
        }
    }
};
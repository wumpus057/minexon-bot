const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../config.js")
const request = require("request");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("serverdurumu")
    .setDescription("Sunucunun durumunu gösterir"),
    run: async (client, interaction) => {
        request({
            url: "https://api.mcstatus.io/v2/status/java/"+ config.sunucununipadresi +"",
            json: true
        }, (err, response, body) => {
            try {
            let host = body.host
            let version = body.version.name_raw
            let players = body.players.online

            const minecraftserverstatus= new EmbedBuilder()
            .setColor("#15ff00")
            .setTitle('Sunucu durumu : **:green_circle:**')
            .setThumbnail("https://api.mcstatus.io/v2/icon/"+ config.sunucununipadresi +"")
            .setDescription('Burada Sunucunun istatislikleri ve bilgileri bulunur')
            .addFields(
                { name: `${host}`, value: 
                `Sunucunun sürümü: **${version}**
                \nSunucudaki aktif kişi sayısı: **${players}**\n
                `},
            )
            interaction.reply({ embeds: [minecraftserverstatus] });
            }
            catch {
                const minecraftserverstatus2 = new EmbedBuilder()
                .setColor("#ED4245")
                .setTitle(`Sunucu durumu : **:red_circle:**`)
                .setDescription(`Burada sunucunun istatislikleri ve bilgileri bulunur`)
                .addFields({name : `${config.sunucununipadresi}` , value : `Sunucu şuan aktif değil üzgünüm`})
                interaction.reply({ embeds : [minecraftserverstatus2]})
            }
        }
    )}
};

const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skin")
    .setDescription("Kullanıcının minecraft skinini gösterir")
    .addStringOption(option =>
        option.setName('player')
          .setDescription('Kullanıcı adınızı girin')
          .setRequired(true)),
    run: async (client, interaction) => {
        const player = interaction.options.getString('player')        
        const minecraftskin = new EmbedBuilder()
        .setColor(0x0099FF)
	    .setTitle('İşte minecraft skinin')
        .setImage("https://mc-heads.net/body/" + player +"")
        interaction.reply({ embeds: [minecraftskin] });
    }
 };

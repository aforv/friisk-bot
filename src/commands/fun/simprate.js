const { EmbedBuilder } = require('discord.js')

module.exports.run = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  const simprate = Math.floor(Math.random() * 101);

  if (args[0] == '-') {
    user = message.author
  }


  const embed = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('Simprate Machine')
    .setDescription(`${user.username} is ${simprate}% simp!`)
    .setFooter('As this might trigger someone in this generation, **This is a joke!** It is not meant to hurt anyone in any way.');

  message.reply({ embeds: [embed] });
}
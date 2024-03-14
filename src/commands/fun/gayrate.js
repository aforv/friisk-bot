const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  const gayrate = Math.floor(Math.random() * 101);
  let flag;

  if (args[0] == '-') {
    user = message.author
  }

  if (gayrate > 1) {
    flag = ':rainbow_flag:';
  } else {
    flag = '';
  }

  const embed = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('Gayrate Machine')
    .setDescription(`${user.username} is ${gayrate}% gay ${flag}`)
    .setFooter({text: 'As this might trigger someone in this generation, **This is a joke!** It is not meant to hurt anyone in any way.'});

  message.reply({ embeds: [embed] });
}
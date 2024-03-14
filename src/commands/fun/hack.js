const { EmbedBuilder } = require('discord.js');
const { random } = require('lodash');

module.exports.run = async (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  const ip = `${random(100, 999)}.${random(100, 999)}.${random(100, 999)}.${random(100, 999)}`;
  const email = `${user.username}@gmail.com`;
  const password = `${user.username}${random(100, 999)}`;

  if (args[0] == '-') {
    user = message.author
  }
  
  
    const embed = new EmbedBuilder()
    .setTitle('Hacking Results')
    .setDescription(`**Name:** ${user.username}\n**IP:** ${ip}\n**Email:** ${email}\n**Password:** ${password}`)
    .setColor('#FF0000')
    .setFooter('As this might trigger someone in this generation, **This is a joke!** It is not meant to hurt anyone in any way.');

  message.reply({ embeds: [embed] });
}
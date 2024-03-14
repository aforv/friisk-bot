const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const user = message.author;
  const choices = ['heads', 'tails'];
  const choice = choices[Math.floor(Math.random() * choices.length)];

  const embed = new EmbedBuilder()
    .setColor('#333333')
    .setTitle(`${user.username}'s Coinflip`)
    .setDescription(`You flipped a coin and got **${choice}**!`);

  message.reply({ embeds: [embed] });
}
const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const user = message.author;
  const mroll = args[0] || 6
  const roll = Math.floor(Math.random() * mroll) + 1;

  if (mroll == '-') {
    mroll = 6
  }

  const embed = new EmbedBuilder()
    .setColor('#333333')
    .setTitle(`${user.username}'s Roll`)
    .setDescription(`You rolled a ${roll}!`);

  message.reply({ embeds: [embed] });

}
const { EmbedBuilder } = require('discord.js');

module.exports.run = async(client, message, args) => {
  const embed = new EmbedBuilder()
  .setTitle('Uptime')
  .setDescription(`Friisk Bot has been up for **${Math.floor(client.uptime / 1000)}** seconds.`);
  message.reply({ embeds: [embed] });
};
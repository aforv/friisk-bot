const { EmbedBuilder } = require('discord.js');

module.exports.run = async(client, message, args) => {
  const embed = new EmbedBuilder()
  .setTitle('Ping')
  .setDescription(`:ping_pong: - Pong!\n\n${client.ws.ping}ms`);
  message.reply({ embeds: [embed] });
};
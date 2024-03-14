const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const suggestChannel = message.guild.channels.cache.find(channel => channel.name === 'suggestions' || channel.name === 'reports-and-suggestions');

  const suggestion = args.join(' ');

  if (!suggestion) {
    return message.reply('Please provide a suggestion.');
  }

  const embed = new EmbedBuilder()
    .setTitle('New Suggestion')
    .setDescription(suggestion)
    .setColor('#00FF00')
    .setFooter({ text: `Suggested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL() });
  suggestChannel.send({ embeds: [embed] })
    .then(() => {
      message.reply('Your suggestion has been submitted.');
    })
    .catch(error => {
      console.error('Error sending suggestion:', error);
      message.reply('An error occurred while submitting your suggestion.');
    });
  message.delete();


}
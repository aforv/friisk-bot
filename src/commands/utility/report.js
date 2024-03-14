const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const reportChannel = message.guild.channels.cache.find(channel => channel.name === 'reports' || channel.name === 'reports-and-suggestions');
  const user = message.mentions.users.first();
  const reason = args.slice(1).join(' ');

  if (!user || user == message.author) {
    return message.reply('Please mention another user to report.');
  }

  if (!reason) {
    return message.reply('Please provide a reason for the report.');
  }

  const embed = new EmbedBuilder()
    .setTitle('New Report')
    .setDescription(`**Reported User:** ${user}\n**Reported By:** ${message.author}\n**Reason:** ${reason}`)
    .setColor('#FF0000')
    .setFooter({ text: `Reported at ${new Date().toLocaleString()}`, iconURL: message.author.displayAvatarURL() });

  reportChannel.send({ embeds: [embed] })
    .then(() => {
      message.reply('Your report has been submitted.');
    })
    .catch(error => {
      console.error('Error sending report:', error);
      message.reply('An error occurred while submitting your report.');
    });

  message.delete();
}
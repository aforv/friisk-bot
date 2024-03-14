const { EmbedBuilder } = require('discord.js')

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
const mpp = args[1] || 10
  const ppSize = Math.floor(Math.random() * mpp) + 1;
  const pp = '8' + '='.repeat(ppSize) + 'D';

  if (mpp > 50) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - Please enter a number between 1 and 50.')
    ]});
  }

  if (args[0] == '-') {
user = message.author
}

  const embed = new EmbedBuilder()
    .setColor('#333333')
    .setTitle(`${user.username}'s PP Size`)
    .setDescription(pp)
    .setFooter({text: 'As this might trigger someone in this generation, **This is a joke!** It is not meant to hurt anyone in any way.'});

  message.reply({ embeds: [embed] });
}
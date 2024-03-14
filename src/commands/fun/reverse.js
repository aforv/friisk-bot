const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const text = args.join(" ").trim();

  if (!text) {
    return message.reply('Please provide some text to reverse.');
  }

  const reversedText = text.split('').reverse().join('');

  const embed = new EmbedBuilder()
    .setTitle('Text Reversed')
    .setDescription(`\`${text}\` ➔ \`${reversedText}\``)
    .setColor('#00FF00');

  message.reply({ embeds: [embed] });
}
const {EmbedBuilder} = require('discord.js')

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  const avatarURL = user.displayAvatarURL({ dynamic: true, size: 4096 });

  if (args[1] == '-') {
user = message.author
}

  const embed = new EmbedBuilder()
    .setTitle(`${user.username}'s Avatar`)
    .setImage(avatarURL)
    .setColor('#00FF00');

  message.reply({ embeds: [embed] });
}
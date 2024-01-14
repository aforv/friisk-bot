const { EmbedBuilder } = require('discord.js');

module.exports.run = async(client, message, args) => {
  const embed = new EmbedBuilder()
  if (args[0] === 'server') {
    embed.setTitle('Server Stats')
      .setThumbnail(message.guild.iconURL())
    .addFields(
      { name: 'Server Name', value: `${message.guild.name}`, inline: true },
      { name: 'Server ID', value: `${message.guild.id}`, inline: true },
      { name: 'Server Owner', value: `<@${message.guild.ownerId}>`, inline: true },
      { name: 'Server Created', value: `${message.guild.createdAt}`, inline: true },
      { name: 'Server Members', value: `${message.guild.memberCount}`, inline: true },
      { name: 'Server Roles', value: `${message.guild.roles.cache.size}`, inline: true
  }
);
  }
  else if (args[0] === 'bot') {
    embed.setTitle('Bot Stats')
  .addFields(
    { name: 'Bot Name', value: `${client.user.username}`, inline: true },
    { name: 'Bot ID', value: `${client.user.id}`, inline: true },
    { name: 'Bot Created', value: `${client.user.createdAt}`, inline: true },
    { name: 'Bot Ping', value: `${client.ws.ping}ms`, inline: true },
    { name: 'Bot Uptime', value: `${client.uptime}`, inline: true },
  );
  }
  else if (args[0] === 'user') {
    embed.setTitle('User Stats')
    .setThumbnail(message.author.displayAvatarURL())
    .addFields(
      { name: 'Username', value: `${message.author.username}`, inline: true },
      { name: 'User ID', value: `${message.author.id}`, inline: true },
      { name: 'User Created', value: `${message.author.createdAt}`, inline: true },
      { name: 'User Joined', value: `${message.member.joinedAt}`, inline: true },
      { name: 'User Avatar', value: `[Link](${message.author.displayAvatarURL()})`});
  }
  else {
    return message.reply('Invalid argument. Please use `server`, `bot` or `user`.');
  }
  
  message.reply({ embeds: [embed] });
};
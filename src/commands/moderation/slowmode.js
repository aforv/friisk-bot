const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('ManageChannels')) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - You do not have permission to use this command.')
    ]});
  }

  const channel = message.channel;
  const duration = parseInt(args[0]);
  
  if (isNaN(duration) || duration < 0 || duration > 21600) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - Please provide a valid duration between 0 and 21600 seconds.')
    ]});
  }

  try {
    await channel.setRateLimitPerUser(duration);
    message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#00FF00')
      .setDescription(`🐌 - Slowmode has been set to ${duration} seconds in this channel.`)
    ]});
  } catch (error) {
    console.error(error);
    message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - An error occurred while setting the slowmode.')
    ]});
  }
};
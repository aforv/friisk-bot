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
  try {
    await message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#00FF00')
      .setDescription(`🔒 - ${channel} has been locked. Only moderators can send messages now.`)
    ]});
    await channel.permissionOverwrites.edit(message.guild.roles.everyone, {
      SendMessages: false
    });
  } catch (error) {
    await console.log(error);
    await message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - An error occurred while locking the channel.')
    ]
  });
  }
}
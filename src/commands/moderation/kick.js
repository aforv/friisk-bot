const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('KICK_MEMBERS')) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - You do not have permission to use this command.')
    ]});
  }
  
  const member = message.mentions.members.first();
  if (!member) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - Please mention a valid member of this server.')
    ]});
  }
  if (!member.kickable) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - I cannot kick this member.')
    ]});
  }

  if (member.id === message.author.id) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - You cannot kick yourself.')
    ]});
  }

if (member.id === client.user.id) {
  return message.reply({embeds:[
    new EmbedBuilder()
    .setColor('#FF0000')
    .setDescription('❌ - You cannot kick me.')
  ]});
}
  
  const reason = args.slice(1).join(' ') || 'No reason provided';
  try {
    await member.kick(reason);
    /*await client.users.send(member.id, {embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription(`You have been kicked from ${message.guild.name} for ${reason}.\n\nIf you wish to appeal, please contact a staff member.`)
    ]});*/
    message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#00FF00')
      .setDescription(`✅ - ${member.user.tag} has been kicked from the server.`)
    ]});
  } catch (error) {
    console.log(error);
    message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - An error occurred while trying to kick the member.')
    ]});
  }
}
const { EmbedBuilder } = require('discord.js');
const muted = 'Muted';

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('ManageRoles')) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - You do not have permission to use this command.')
    ]});;
  }

  const member = message.mentions.members.first();
  if (!member) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - Please mention a valid member to mute.')
    ]});
  }

  const muteRole = message.guild.roles.cache.find(role => role.name === muted);
  if (!muteRole) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription(`❌ - The role **${muted}** does not exist. Please create it and try again.`)
      ]});
  }
  try {
    await member.roles.add(muteRole);
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#00FF00')
      .setDescription(`✅ - ${member} has been muted.`)
    ]});
  
} catch(error) {
    console.log(error);
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription(`❌ - An error occurred while muting ${member}.`)
      ]});
  }
}
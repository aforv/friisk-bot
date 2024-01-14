const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has('ManageMessages')) {
    return message.reply({embeds:[
      new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - You do not have permission to use this command.')
    ]});
  }
  
  const amount = parseInt(args[0]);
  
  if (isNaN(amount) || amount < 1 || amount > 100) {
    return message.reply({embeds:[
    new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - Please provide a valid number between 1 and 100.')
  ]});
  }

  try {
    const fetched = await message.channel.messages.fetch({ limit: amount });
    const deletedMessages = await message.channel.bulkDelete(fetched);
    await message.channel.send({embeds:[
      new EmbedBuilder()
      .setColor('#00FF00')
      .setDescription(`✅ - Successfully purged ${deletedMessages.size} messages.`)
      ]});
  } catch (error) {
    console.log(error);
    await message.reply({embeds:[
    new EmbedBuilder()
      .setColor('#FF0000')
      .setDescription('❌ - An error occurred while trying to purge messages.')
    ]});
  }
}
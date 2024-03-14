const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const channel = message.mentions.channels.first() || message.channel
  const hide = args[1]?.toLowerCase() === 'y' ? true : false;
  args[1] += "≥"
  const text = args.slice('≥').join(" ").trim();

  if (args[0] = '-') {
    channel = message.channel
  }
  
  if (args[1] = '-≥') {
    hide = false
  }

  if (!text) {
    return message.reply('Please provide some text to say.');
  }

  if (hide) {
    message.delete();
  }

  channel.send(text);
}
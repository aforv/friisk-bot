const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  let channel = message.mentions.channels.first() || message.channel
  let hide = args[1]?.toLowerCase() === 'y' ? true : false;
  args[1] += "≥"
  const text = args.slice(args.indexOf('≥')).join(" ").replace('≥', '').trim();

  if (args[0] == '-') {
    channel = message.channel
  }
  
  if (args[1] == '-≥') {
    hide = false
  }

  if (!text) {
    return message.reply('Please provide some text to say.');
  }

  if (hide == true) {
    message.delete();
  }

  channel.send(text);
}
const { EmbedBuilder} = require('discord.js');

module.exports.run = async(client, message, args) => {
  const embed = new EmbedBuilder()
  .setTitle("Help")
  .setDescription("**Commands**\nPrefix is `.`\n\n**Info**\n\n`help` - Shows this message\n`ping` - Shows the bot's ping\n`info (A: server, bot, user)` - Shows the info of A\n`uptime` - Shows the bot's uptime\n`avatar` - Shows the user's avatar\n`servericon` - Shows the server's icon\n`membercount` - Shows the server's member count\n\n**Moderation**\n\n`ban <user> <reason>` - Bans a user\n`kick <user> <reason>` - Kicks a user\n`purge <amount>` - Purges a certain amount of messages\n`lock` - Locks this channel\n`unlock` - Unlocks this channel\n`slowmode <number>` - Sets the slowmode of a channel\n`warn <user> <reason>` - Warns a user\n`warnings <user>` - Shows the user's warnings\n`resetwarns <user>` - Resets the user's warnings\n`mute <user> <reason>` - Mutes a user\n`unmute <user> <reason>` - Unmutes a user\n\n**Fun**\n\n`8ball <question>` - Ask the bot a question\n`coinflip` - Flips a coin\n`roll` - Rolls a dice\n`meme` - Shows a random meme\n`rps <rock, paper, scissors>` - Play rock paper scissors with the bot\n`say <message>` - Says a message\n`hack <user>` - Hacks a user\n`gayrate <user>` - Shows how gay a user is\n`simprate <user>` - Shows how simp a user is\n`pp <user>` - Shows the user's pp size\n`reverse <message>` - Reverses a message\n\n**Utility**\n\n`suggest <suggestion>` - Suggest something\n`report <user> <reason>` - Reports a user");
  message.reply({ embeds: [embed] });
};
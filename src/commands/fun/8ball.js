const { EmbedBuilder } = require('discord.js');

module.exports.run = async(client, message, args) => {
  const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "No."
  ];
  const question = args.join(' ');
  const response = responses[Math.floor(Math.random() * responses.length)];
  const embed = new EmbedBuilder()
    .setTitle(message.author.username + ' 8ball')
    .setDescription(`**Question:** ${question}\n**Answer:** ${response}`)
    .setColor('#333333');
  message.reply({ embeds: [embed] });
}
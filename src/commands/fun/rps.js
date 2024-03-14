const { EmbedBuilder } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const choices = ['r', 'p', 's'];
  const ec = ["rock", "paper", "scissors"]
  const userChoice = args[0]?.toLowerCase().charAt(0);
  const botChoicer = Math.floor(Math.random() * choices.length);
  const botChoice = choices[botChoicer]
  let userEChoice;

  if (userChoice === 'r') {
    userEChoice = "rock";
  } else if (userChoice === 'p') {
    userEChoice = "paper";
  } else if (userChoice === 's') {
    userEChoice = "scissors";
  }

  if (!userChoice || !choices.includes(userChoice)) {
    return message.reply('Please choose either rock(r), paper(p), or scissors(s).');
  }

  let result;
  if (userChoice === botChoice) {
    result = 'It\'s a tie!';
  } else if (
    (userChoice === 'r' && botChoice === 's') ||
    (userChoice === 'p' && botChoice === 'r') ||
    (userChoice === 's' && botChoice === 'p')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  const embed = new EmbedBuilder()
    .setTitle('Rock, Paper, Scissors')
    .setDescription(`You chose ${userEChoice}, I chose ${ec[botChoicer]}. ${result}`)
.setColor('#333333');
}
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const client = new Client({
  intents:
    [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
    ],
});
const prefix = '.';

client.on('ready', () =>
  console.log(`✅ OK - Logged in as ${client.user.tag}`)
);

client.on('messageCreate', (message) => {
  // Check if message is sent by a bot or if it starts with the prefix
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  // Variables
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Command commands to command
  if (client.commands.get(command)) {

// Runs the command if it exists
client.commands.get(command).run(client, message, args);
  }
  else
  {
    // If not, send a message saying that the command doesn't exist
    console.log(`❌ ERR - Command ${command} not found!`)
  }
});

// Loads all the commands

client.commands = new Map();
(async function fetchCommands(dir = 'commands'){
// Read directory
  let files = await fs.readdirSync(path.join(__dirname, dir));

  // Loop through files
  for (let file of files) {
    let stat = await fs.lstatSync(path.join(__dirname, dir, file));
    
    // If file is a directory
    if (stat.isDirectory()) fetchCommands(path.join(dir, file));
    // If file is a .js file
    else if (file.endsWith('.js'))
    {
      // Get commands
      let commandName = file.substring(0, file.indexOf('.js'));
      let commandModule = require(path.join(__dirname, dir, file));
      // Register command
    client.commands.set(commandName, commandModule);
    }
  }
})();

client.login(process.env['TOKEN']);
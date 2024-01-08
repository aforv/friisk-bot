module.exports.run = async(client, message, args) => {
  message.channel.send(`This is the help command ${args[0]}`);
}
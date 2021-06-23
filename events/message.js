module.exports = {
  name: 'message',
  execute(message, client) {
    const args = message.content.slice(client.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName)

    if ((message.author.bot) || (!message.content.startsWith(client.prefix))) return

    try {
      command.execute(message, client)
    } catch (error) {
      console.error(error)
      message.reply('Désolé , je ne comprends pas la demande')
    }
  },
}

const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Help command from bot',
  execute(message, client) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Aide du BOT')
      .addField(`${client.prefix}help : `, 'Give bot commands')
      .addField(`${client.prefix}language : `, `Set joke language. Supported languages are : (${client.jokeLanguages.join(', ')})`)
      .addField(`${client.prefix}joke : `, 'Tell a random joke')
      .setFooter(`Demandé par ${message.author.tag}`)
      .setTimestamp()
    message.channel.send(embed)
  },
}

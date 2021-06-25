const Discord = require('discord.js')

module.exports = {
  name: 'language',
  description: 'Configure la langue des blagues',
  async execute(message, client) {
    const embed = new Discord.MessageEmbed().setTitle('Language Switch')
    const lang = (message.content.slice(client.prefix.length).trim().split(' '))[1]
    if (client.jokeLanguages.includes(lang)) {
      client.setServerLanguage(message.channel.guild.id, lang)
      embed.addField('New Language : ', lang)
    } else {
      embed.addField('New Language : ', 'This language is not supported')
      embed.addField('Languages available : ', client.jokeLanguages.join(', '))
    }
    embed.setFooter(`Demandé par ${message.author.tag}`).setTimestamp()
    await message.channel.send(embed)
  },
}

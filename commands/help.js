const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Help command from bot',
  execute(message, client) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Aide du BOT')
      .addField(`${client.prefix}help : `, 'Donne les commandes du bot')
      .addField(`${client.prefix}joke : `, 'Raconte une blague au hasard')
      .setFooter(`Demandé par ${message.author.tag}`)
      .setTimestamp()
    message.channel.send(embed)
  },
}

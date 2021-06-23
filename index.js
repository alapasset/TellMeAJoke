const fs = require('fs')
const Discord = require('discord.js')
const Client = require('./client/client.js')
const config = require('./config.json')

const client = new Client(config)

// COMMANDS
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
}

// EVENTS
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
  const event = require(`./events/${file}`)
  if (event.once)
    client.once(event.name, (...args) => event.execute(...args, client))
  else
    client.on(event.name, (...args) => event.execute(...args, client))
}

client.login(client.config.token)

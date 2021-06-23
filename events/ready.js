module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    client.user.setActivity(`${client.config.prefix}help`, { type: 'PLAYING' })
    console.log('Le bot "Tell Me a Joke" est lancé!')
  },
}

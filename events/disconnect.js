module.exports = {
  name: 'disconnect',
  once: true,
  execute(client) {
    client.sequelize.close()
    console.log('Le bot "Tell Me a Joke" est éteint!')
  },
}

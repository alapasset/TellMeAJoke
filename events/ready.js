module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.jokeLanguages = await client.requestOnJokeAPI('get', '/languages', 'jokeLanguages')
    client.user.setActivity(`${client.prefix}help`, { type: 'PLAYING' })
    console.log('Le bot "Tell Me a Joke" est lancé!')
  },
}

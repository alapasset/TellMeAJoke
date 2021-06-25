const sleep = delay => new Promise(resolve => setTimeout(resolve, delay)) // eslint-disable-line no-promise-executor-return

module.exports = {
  name: 'joke',
  description: 'Raconte une blague au hasard',
  async execute(message, client) {
    const joke = await client.requestOnJokeAPI('get', `/joke/Any?lang=${await client.getServerLanguage(message.channel.guild.id)}`)
    const responseMessage = await message.channel.send(`**${joke.setup}**`)
    await sleep(3000)
    responseMessage.edit(responseMessage.content + `\n${joke.delivery}`)
  },
}

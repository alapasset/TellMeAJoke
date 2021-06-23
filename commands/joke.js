const fetch = require('node-fetch')
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay)) // eslint-disable-line no-promise-executor-return

module.exports = {
  name: 'joke',
  description: 'Raconte une blague au hasard',
  async execute(message) {
    const response = await fetch('https://www.blagues-api.fr/api/random', {
      method: 'get',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${process.env.BLAGUES_TOKEN}` },
    })

    const joke = await response.json()

    const responseMessage = await message.channel.send(`**${joke.joke}**`)
    await sleep(3000)
    responseMessage.edit(responseMessage.content + `\n${joke.answer}`)
  },
}

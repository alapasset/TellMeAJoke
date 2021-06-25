const { Client, Collection } = require('discord.js')
const fetch = require('node-fetch')
const Keyv = require('keyv')

module.exports = class extends Client {
  constructor(prefix) {
    super({
      disableEveryone: true,
      disabledEvents: ['TYPING_START'],
    })
    this.jokeLanguages = []
    this.commands = new Collection()
    this.prefix = prefix
    this.jokeLanguageSelected = new Keyv()
  }

  async requestOnJokeAPI(method, url, parameter) {
    url = `https://stage.jokeapi.dev${url}`
    const response = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json' },
    })
    const responseJson = await response.json()
    return parameter ? responseJson[parameter] : responseJson
  }

  async getServerLanguage(serverID) {
    return await this.jokeLanguageSelected.get(serverID) ?? 'en'
  }

  async setServerLanguage(serverID, language) {
    await this.jokeLanguageSelected.set(serverID, language)
  }
}

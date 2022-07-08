let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch()
  let jajal = require('./lib/IMG_20220115_120829_433.jpg')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'jajal', 'JAJAL DOANG BANG', m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(jajal)$/i
handler.limit = true
module.exports = handler

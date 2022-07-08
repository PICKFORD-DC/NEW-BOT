let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://telegra.ph/file/6cea8b0f5d44e5796a9d8.jpg')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'JAJAL DOANG BANG', m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(jajal)$/i
handler.limit = true
module.exports = handler

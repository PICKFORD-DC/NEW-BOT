let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/sewa.gif')
conn.sendFile(m.chat, helloaine, '', 'SEWAH BOT', m, true)
}

handler.customPrefix = /^(cek)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

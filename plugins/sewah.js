let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/AW3884646_00.gif')
conn.sendFile(m.chat, helloaine, '', 'SEWAH BOT', m, true)
}

handler.customPrefix = /^(cek)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

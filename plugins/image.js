let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/20220709_140748.jpg')
conn.sendFile(m.chat, helloaine, '', 'aku lek jajal ongab', m, true)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

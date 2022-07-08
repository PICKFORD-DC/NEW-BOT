let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/IMG_20220115_120829_433.jpg')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(lolot)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

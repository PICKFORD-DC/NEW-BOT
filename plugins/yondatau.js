let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/yondatau.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}
handler.help = ['lagi apa?']

handler.tags = ['gabut']
handler.customPrefix = /^(lagiapa|lagi apa?)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

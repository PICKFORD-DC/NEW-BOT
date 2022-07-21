let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/desah.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}
handler.help = ['kak desah dong']

handler.tags = ['gabut']
handler.customPrefix = /^(Kakdesahdong|kakdesahdong|kak desah dong)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

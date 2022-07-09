let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/AW3884646_00.gif')
conn.sendFile(m.chat, helloaine, '', '*• SEWA BOT & UP TO PREMIUM •*\n\n1. Grup / Selama Bot Aktif\nRp. 5.000 Dana\nRp. 5.000 Pulsa\n\n2. Premium / Selama Bot Aktif\nRp. 3.000 Dana\nRp. 3.000 Pulsa\n\n3. Premium + Grup / Selama Bot Aktif\nRp. 8.000 Dana\nRp. 8.000 Pulsa\n\n\nHubungi Owner Untuk Melanjutkan', m, true)
}

handler.customPrefix = /^(swa)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

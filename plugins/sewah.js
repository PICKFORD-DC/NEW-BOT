let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/20220709_145249.jpg')
conn.sendFile(m.chat, helloaine, '', '*• SEWA BOT & UP TO PREMIUM •*\n\n1. Grup / Selama Bot Aktif\n\nRp. 5.000 Dana\nRp. 5.000 Pulsa\n\n2. Premium / Selama Bot Aktif\nRp. 3.000 Dana\nRp. 3.000 Pulsa\n\n3. Premium + Grup / Selama Bot Aktif\nRp. 8.000 Dana\nRp. 8.000 Pulsa\n\n\nHubungi Owner Untuk Melanjutkan', m, true)
}
conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)


handler.customPrefix = /^(sewa)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

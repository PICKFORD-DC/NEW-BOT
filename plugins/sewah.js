let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/sewa.gif')
conn.sendFile(m.chat, helloaine, '', '
*• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / Selama Bot Aktif
Rp. 5.000 Dana
Rp. 5.000 Pulsa

2. Premium / Selama Bot Aktif
Rp. 3.000 Dana
Rp. 3.000 Pulsa

3. Premium + Grup / Selama Bot Aktif
Rp. 8.000 Dana
Rp. 8.000 Pulsa

Hubungi Owner Untuk Melanjutkan
', m, true)
}

handler.customPrefix = /^(cek)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/20220712_170633.jpg')
conn.sendFile(m.chat, helloaine, '', '*• DONASI •*\n\n083806211924(DANA)\n\n083806211924(PULSA)\n\nRp. 5.000 Pulsa\n\n\n MAKASIH BAGI YANG SUDAH BERSEDEKAH SEMOGA AMAL NYA DI TERIMA OLEH ALLAH SUBAHANAHUWAALA', m, true)
}

handler.customPrefix = /^(donasi)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler

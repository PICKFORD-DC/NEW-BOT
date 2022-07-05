let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/f26eea3a1494b9797e33d.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6283806211924@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/8de77ddeac7a1cbb143e6.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/8de77ddeac7a1cbb143e6.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / Selama Bot Aktif
Rp. 5.000 Dana
Rp. 5.000 Pulsa

2. Premium / Selama Bot Aktif
Rp. 3.000 Dana
Rp. 3.000 Pulsa

3. Premium + Grup / Selama Bot Aktif
Rp. 8.000 Dana
Rp. 8.000 Pulsa

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7804611876278344'}]}],
  headerImage: { productId: '7804611876278344',
  jpegThumbnail: baper },
  businessOwnerJid: `6287877019362@s.whatsapp.net`
  },
  footerText: 'https://aiinne.github.io',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }

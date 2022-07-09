let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kata kata Ustadz Abdulsomad","kata kata islam").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Random Quotes",m))
   }
    
handler.help = ['quoteshalal']
handler.tags = ['gabut']
handler.command = /^(quoteshalal)$/i
handler.limit = true

module.exports = handler

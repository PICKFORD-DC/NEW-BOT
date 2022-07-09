let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kata kata ustadz abdul somad","kata kata islam").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Random Quotes",m))
   }
    
handler.help = ['quoteshalal']
handler.tags = ['gabut']
handler.customPrefix = /^(quoteshalal)$/i
handler.command = new RegExp
handler.limit = true

module.exports = handler

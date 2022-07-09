let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("Quotes Ustad Abdulsomad","quotes halal").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"janji gak jadi bahan coli 😂",m))
   }
    
handler.help = ['quoteshalal']
handler.tags = ['internet']
handler.command = /^(quoteshalal)$/i
handler.limit = true

module.exports = handler

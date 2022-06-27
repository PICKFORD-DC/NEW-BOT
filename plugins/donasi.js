let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/Saldo Dana 」
│ »  [083806211924] 
╰─────────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

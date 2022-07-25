let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  
}
handler.command = /^bug$/i
handler.owner = true

module.exports = handler

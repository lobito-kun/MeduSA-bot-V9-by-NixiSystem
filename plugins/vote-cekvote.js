let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*No hay votos!!*_\n\n*${usedPrefix}iniciarvoto* - Para iniciar el voto`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*「 VOTE 」*

*Razon:* ${reason}

*si*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*no*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}}

*${usedPrefix}desvoto* - 

_by meduS.A-botV2_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cheqvoto']
handler.tags = ['vote']
handler.command = /^cheqvoto$/i
handler.group = true
module.exports = handler

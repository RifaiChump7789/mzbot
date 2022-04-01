exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~....`
	}
exports.ok = () =>{
	return` ✅ Berhasil`
	}
exports.joki = (prefix) =>{
    return`Epic - Legend
Legend - Mythic
Mythic - Glory`
   }
exports.mzstore = (prefix, pushname) =>{
	return`Halo ${pushname} ^-^
Silahkan pilih list yang anda mau!.\n\n<𝐌𝐄𝐍𝐔 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍>

❀𝐖𝐈𝐒𝐍𝐔 𝐖𝐀𝐑𝐃𝐀𝐍𝐀❀
¤ 𝐆𝐎𝐏𝐀𝐘 : 082274429758
¤ 𝐃𝐀𝐍𝐀 : 082274429758
¤ 𝐋𝐈𝐍𝐊-𝐀𝐉𝐀 : 082274429758
¤ 𝐎𝐕𝐎 : 082274429758
<><><><><><><><><><>
¤ 𝐋𝐈𝐍𝐊 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 𝐏𝐌 𝐀𝐃𝐌𝐈𝐍
{ ! } 𝐒𝐄𝐑𝐓𝐀𝐊𝐀𝐍 𝐁𝐔𝐊𝐓𝐈 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍.`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro.
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group_ `
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Cihh out_`
}
exports.menu = (prefix, salam, pushname, sender, time) =>{
	return`Selamat ${salam}
	
	• Nama : ${pushname}
    • Nomor : ${sender.split("@")[0]}
    • Waktu : ${time}
    
╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}bc [pesan] {khusus owner/admin}
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}pinterest [query]
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 
│ • ${prefix}toimg [reply/caption]
│ • ${prefix}tebakgambar
├ *Info*
│ • ${prefix}owner
╰─⬣
`
	}
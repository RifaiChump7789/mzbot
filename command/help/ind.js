exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~....`
	}
exports.ok = () =>{
	return` β Berhasil`
	}
exports.joki = (prefix) =>{
    return`Epic - Legend
Legend - Mythic
Mythic - Glory`
   }
exports.mzstore = (prefix, pushname) =>{
	return`Halo ${pushname} ^-^
Silahkan pilih list yang anda mau!.\n\n<ππππ ππππππππππ>

βπππππ πππππππβ
Β€ πππππ : 082274429758
Β€ ππππ : 082274429758
Β€ ππππ-πππ : 082274429758
Β€ πππ : 082274429758
<><><><><><><><><><>
Β€ ππππ ππππππππππ ππ πππππ
{ ! } ππππππππ πππππ ππππππππππ.`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro.
β―ΦΈ   ΦNama :
β―ΦΈ   ΦUmur :
β―ΦΈ   ΦKelamin :
β―ΦΈ   ΦAskot :
β°β α¬ _Patuhi Rules Group_ `
      }
exports.leave = () =>{
	return`
β
β°β α¬ _Cihh out_`
}
exports.menu = (prefix, salam, pushname, sender, time) =>{
	return`Selamat ${salam}
	
	β’ Nama : ${pushname}
    β’ Nomor : ${sender.split("@")[0]}
    β’ Waktu : ${time}
    
β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β β’ ${prefix}bc [pesan] {khusus owner/admin}
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}pinterest [query]
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji 
β β’ ${prefix}toimg [reply/caption]
β β’ ${prefix}tebakgambar
β *Info*
β β’ ${prefix}owner
β°ββ¬£
`
	}
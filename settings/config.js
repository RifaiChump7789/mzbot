const fs = require('fs')
const chalk = require('chalk')

global.self = false 
global.anticall = true
global.anti_delete = true

global.ownername ="RifaiChump"
global.ownernumber = "6289501564737"
global.botname = "Rifai-BoT"
global.thumbnail = fs.readFileSync("./settings/rifai.jpg") 
global.background = "https://telegra.ph/file/c50321dd75b720ceaf68f.jpg"
global.mzstore = fs.readFileSync("./settings/mz.jpg")
global.mlstore = fs.readFileSync("./settings/ml.jpg")
global.jokistore = fs.readFileSync("./settings/room.jpg")
global.lolkey = 'e966d3aac613b61dabd35cc6'
global.zenzkey = '8423e19c13' 
global.limit = {
		free:30,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
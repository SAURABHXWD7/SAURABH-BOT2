const fs = require("fs");
module.exports.config = {
	name: "Radhe-radhe",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "SAURABH THAKUR", 
	description: "THIS BOT IS MR SAURABH THAKUR",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("radhe radhe") ||
     react.includes("RADHE RADHE") || react.includes("Radhe") || react.includes("radhe") ||
react.includes("jai shree Krishna") ||
react.includes("krishna")) {
		var msg = {
				body: `𝐑𝐚𝐝𝐡𝐞 𝐫𝐚𝐝𝐡𝐞 𝐣𝐢 🙏`,attachment: fs.createReadStream(__dirname + `/noprefix/Radhe.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

const fs = require("fs");
module.exports.config = {
  name: "samosa",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "samosa",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Samosa")==0 || event.body.indexOf("Samose")==0 || event.body.indexOf("SAMOSA")==0 || event.body.indexOf("samosa")==0) {
    var msg = {
        body: "─━━◉❖Nobita❖◉━━─\n😅𝐘𝐄 𝐋𝐈𝐉𝐈𝐘𝐄 𝐀𝐀𝐏𝐊𝐄 𝐒𝐀𝐌𝐎𝐒𝐄🥰",
        attachment: fs.createReadStream(__dirname + `/noprefix/samosa.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

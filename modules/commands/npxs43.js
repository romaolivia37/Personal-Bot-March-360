const fs = require("fs");
module.exports.config = {
	name: "npxs43",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs43",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤏🏻")==0 || event.body.indexOf("🤙🏻")==0 || event.body.indexOf("🙀")==0 || event.body.indexOf("🤠")==0) {
		var msg = {
				body: "-Dekh Lena My Owner :- S M Bayezid Arefin USE Emoji  Same Voice 🤠🙀🤙🏻🤏🏻",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs43.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤙🏻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
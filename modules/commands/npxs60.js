const fs = require("fs");
module.exports.config = {
	name: "npxs60",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs60",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💘")==0 || event.body.indexOf("🤍")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("😙")==0) {
		var msg = {
				body: "-সময় ধরে রাখা যায় না কিন্তু মনে রাখা যায়  Bot Developer S M Bayezid Arefin Bhai  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs60.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
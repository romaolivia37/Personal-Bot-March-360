const fs = require("fs");
module.exports.config = {
	name: "npxs61",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs61",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😏")==0 || event.body.indexOf("🙁")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("🥳")==0) {
		var msg = {
				body: "-চাইলেই যদি সব কিছু পাওয়া যেতো তাহলে অপূর্ণ বলে কিছু থাকতো না🙂 Bot Developer S M Bayezid Arefin Bhai  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs61.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
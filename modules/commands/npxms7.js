const fs = require("fs");
module.exports.config = {
	name: "npxms7",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms7",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤕")==0 || event.body.indexOf("😨")==0 || event.body.indexOf("🤢")==0 || event.body.indexOf("☹️")==0) {
		var msg = {
				body: "-তুমি আমার সে প্রিয়,যে কিনা পূর্ণতা দেখিয়ে শূন্যতা দিয়ে গেছো..!!💔 ★Thank you for. Auto Replied★Bot Developer S M Bayezid Arefin Bhai  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com & Facebook Page Link:- https://www.facebook.com/Bayezid3600",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms7.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
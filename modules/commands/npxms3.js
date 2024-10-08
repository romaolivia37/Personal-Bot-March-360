const fs = require("fs");
module.exports.config = {
	name: "npxms3",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms3",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙄")==0 || event.body.indexOf("🙈")==0 || event.body.indexOf("😊")==0 || event.body.indexOf("🙆🏻‍♂")==0) {
		var msg = {
				body: "- জীবনে অনেক কিছু শিখলাম শুধু সার্থপর হওয়াটা শিখতে পারলাম না ★Thank you for. Auto Replied★Bot Developer S M Bayezid Arefin Bhai  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms3.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
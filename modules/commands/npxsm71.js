const fs = require("fs");
module.exports.config = {
	name: "npxsm71",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxsm71",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💋")==0 || event.body.indexOf("💄")==0 || event.body.indexOf("🙋🏻‍♀")==0 || event.body.indexOf("🙋🏻‍♂")==0) {
		var msg = {
				body: "- এই শহরে মন বুঝার চেয়ে ভুল বুঝার মানুষ অনেক বেশি😅💔 ★Thank you for. Auto Replied★Bot Developer S M Bayezid Arefin Bhai  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxsm71.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
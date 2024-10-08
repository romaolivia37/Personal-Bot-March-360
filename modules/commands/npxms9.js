const fs = require("fs");
module.exports.config = {
	name: "npxms9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms9",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Bayezid Arefin")==0 || event.body.indexOf("bot")==0 || event.body.indexOf("Bot")==0 || event.body.indexOf("Bayezid")==0) {
		var msg = {
				body: "-তুমি যদি  মেয়ে হয়ে আমাকে খুজো তাহলে  I Love You 😘🥰 ! ..!!💔 ★Thank you for. Auto Replied★Bot Developer S M Bayezid Arefin Bhai  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com & Facebook Page Link:- https://www.facebook.com/Bayezid3600",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms9.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋🏻‍♂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
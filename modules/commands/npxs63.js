const fs = require("fs");
module.exports.config = {
	name: "npxs63",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs63",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😵")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("😂")==0 || event.body.indexOf("🤣")==0) {
		var msg = {
				body: "-এক ডিসেম্বরে তোমায় পেয়েছিলাম আরেক ডিসেম্বর আসতেই হারিয়ে ফেললাম 😅😅Bot Developer S M Bayezid Arefin  Emoji File Creator BayezidBhai  ★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs63.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
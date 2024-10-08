const fs = require("fs");
module.exports.config = {
	name: "npxs57",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs57",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Bayezid Arefin")==0 || event.body.indexOf("bayezid")==0 || event.body.indexOf("bayezid")==0 || event.body.indexOf("Bayezid")==0) {
		var msg = {
				body: "- -Dear Sir or Madam, Thank you very much for your notification.! My Owner Bayezid Busy Now Please Wait..........  Thank you for.(Auto Replied)★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs57.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋🏻‍♂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
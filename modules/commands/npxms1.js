const fs = require("fs");
module.exports.config = {
	name: "npxms1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "S M Bayezid Arefin", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bayezid Arefin")==0 || event.body.indexOf("Bot")==0 || event.body.indexOf("@Mohammad bayezid")==0 || event.body.indexOf("বায়েজিদ আরেফিন")==0) {
		var msg = {
				body: "-Dear Sir or Madam, Thank you very much your Message!  I have forwarded your message to my owner. Please wait for a while. I will reply very soon.  Thank you for.(Auto Replied)★Support Email:- mr.anonymous404@yahoo.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxms1.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋🏻‍♂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
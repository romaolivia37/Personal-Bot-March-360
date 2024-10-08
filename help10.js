module.exports.config = {
	name: "help1",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Rup Kumar",
	description: "Help Menu",
	commandCategory: "Tools",
	usages: "[Module name]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 30
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": " ",
		"helpList": '🧩Currently Available Commands🧩\n\n👉/all - Mention All Members\n👉/group - Group Controler\n👉/uid - FB Account ID \n👉/search - Google Searcher\n👉/yt2mp3 - YouTube to Mp3\n👉/yt2mp4 - YouTube to Mp3\n👉/ytsearch - YouTube Video Search\n👉/trans - Language Translator\n👉/covid - Corona virush update info\n👉/meme - Some Funny Memes\n👉/Add - Add fb user on your group\n👉/advice - আপনার জন্য ভালো কিছু উপদেশ\n👉/fbfriendlist - fb frnd list check\n👉/fbrequest - Friend Request Accept\n👉/fbuser - Deactive Facebook User from group\n👉/fbcover - Make ur own fb cover\n👉/card - Make ur own card\n👉/song - 🔎 Searching for audio\n👉/video - 🔎 Searching for video\n👉/pic - 🔎 Searching for image\n👉/jail - জেল খানা\n👉/kick - Member Remove\n👉/kiss - চুম্মা চুম্মি🤫\n👉/lyrics - ♩ গান এর লিরিক্স.\n👉/mark - Mark Zuckerberg  Comment\n👉/marry - শুভ বিবাহ 😁.\n👉/meta - Auto Chatbot\n👉/morce\n👉/movie - All information.\n👉/chor - meantion your friend.\n👉/Obama - Twitter Funny Post\n👉/love -❣️\n👉/weather - আবহাওয়া বার্তা\n👉/phub - Post the content of the comment on ponhub\n👉/tm - Teampurary Mail\n👉/poop - কাবাবের হাড্ডি \n👉/poutine - আমার ছোট ভাই পুতিন এর সাথে মিটিং.\n👉/report - any problem send report\n👉/resend - on message\n👉/rip - 😪মরে জাওয়া😓\n👉/setname - ইউজার নাম চেঞ্জ\n👉/pubg - fun\n👉/shortcut - \n👉/link - any image/video direct download link\n👉/slot -\n👉/ff - Your Name Freefire Banner\n👉/spank - meantion ur friend😂\n👉/ss - full Link Page  Screenshots\n👉/tiktok - [Tiktok] Enter the character to search for! Song artist name.\n👉/toilet - Funny Post Barhroom.\n👉/trash - Trash ur friend\n👉/tigger -\n👉/Trump - Twitter funny post\n👉/zuck - Zuckerberg Funny post\n👉/vb - bangla voice\n👉/rname - Change your Random Nicknames\n👉/math - Solve Mathematics\n\n⚡️More Coming Soon⚡️\n\n✅ For More Contact With Bot Developer : S M Bayezid Arefin mr.anonymous404@yahoo.com ✌\n\n',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		
		return api.sendMessage(msg + getText("helpList", commands.size, prefix), threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});

	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}
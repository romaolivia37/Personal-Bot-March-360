module.exports.config = {
	name: "shiblu",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/fyZXy67S/BAYEZID-ROBOT.gif", 
            
            "https://i.postimg.cc/Y0wvdv0w/mypage.png", 
            
            "https://i.postimg.cc/nrd34fVB/profilemy.png",
            
            "https://i.postimg.cc/CMtPxYtp/page2.png"];
  
var callback = () => api.sendMessage({body:`জ্বী বলুন শুনতেছি......
ADMIN AND BOT INFORMATION 
BOT NAME : 🤖➠B A Y E Z I D~ B O T 2 0 2 3🤖 

*My Owner info & Any Problem Contact :-
  
Page1 Link :- https://www.facebook.com/Bayezid3600

Page 2 Link :- https://www.facebook.com/KABBER.S0HOR

★Facebook Account Link:-https://www.facebook.com/ABDEF.0

★Support Email:- mr.anonymous404@yahoo.com

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
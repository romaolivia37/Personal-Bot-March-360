module.exports.config = {
	name: "info",
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
            
            "https://i.postimg.cc/fyZXy67S/BAYEZID-ROBOT.gif", 
            
            "https://i.postimg.cc/fyZXy67S/BAYEZID-ROBOT.gif",
            
            "https://i.postimg.cc/fyZXy67S/BAYEZID-ROBOT.gif"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 

BOT NAME : ${global.config.BOTNAME}

BOT ADMIN : 『বায়েজিদ ফেসবুক পেজ S M Bayezid Arefin Noor』

FACEBOOK Page : https://www.facebook.com/Bayezid3600

BOT PREFIX : ${global.config.PREFIX}

BOT OWNER : 『S M Bayezid Arefin』 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
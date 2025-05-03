const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_36_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4U3hSWGg3RGNDZlFMSU1NZk9POTdiUkd1WGlpM3dZM3lNbGNCcUE1RzMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY4NTA2NTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NjU5MDdFQUM2Q0VGOTlCRjEwQkM1MkQxMTczOUZBOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDYyOTAxNjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2ODUwNjUyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzBCOUU4N0VDNjlGMEI3MjREMUEzNEIxRDIyMTY1RUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2MjkwMTYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNFNzYyQlZfUzhXUHYzaDRNZlVDSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRlYjRiYzAtYmM1MC00NGNlLWIxNDQtOTFkYzNlNzNlYTRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDI0MSxcbiAgICAgIDE1MCxcbiAgICAgIDM1LFxuICAgICAgMjUxLFxuICAgICAgMzgsXG4gICAgICAyMjgsXG4gICAgICAxMDUsXG4gICAgICAyLFxuICAgICAgMjA2LFxuICAgICAgMTk2LFxuICAgICAgMTI5LFxuICAgICAgMTcwLFxuICAgICAgNDIsXG4gICAgICAxODksXG4gICAgICA3NCxcbiAgICAgIDkxLFxuICAgICAgOTEsXG4gICAgICAxNCxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICA4MCxcbiAgICAgIDI0MyxcbiAgICAgIDEzMixcbiAgICAgIDIzNSxcbiAgICAgIDE4OSxcbiAgICAgIDEzNixcbiAgICAgIDE0OCxcbiAgICAgIDE5NCxcbiAgICAgIDEyNyxcbiAgICAgIDExMCxcbiAgICAgIDIxMixcbiAgICAgIDcxLFxuICAgICAgMTg4LFxuICAgICAgMzIsXG4gICAgICAxMjEsXG4gICAgICA0OCxcbiAgICAgIDE3MCxcbiAgICAgIDE2LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktGM1Q2WVZUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2ODUwNjUyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzMyNTIwMTQ3MTQ5OTY6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5GR7YOA66Oo7Ims8J+SlfCfh7Dwn4e3XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTM2aUpvRkVPMkwyY0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUcmZ5S01DZldudTU2VmRyay9IQ1QrNEcrWHcyT3BxSGY5cU1IS0RlTnkwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk8zanpKbHpTSnZMaFFLVWhLUHk5TEF5NFIrekJYWXFlWG5oNkVyeTZYSkRGS2pkZWJ1SS83b0lQLzJ5RzYwcjlZVzN5Unp1ZnFUNDRkZ21jNVEvZEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNEVDlFTk5QM0RJbXlWK0xtbzJUdDhvbHZqempWOUpFV2g2bGxsVHFONGt5UzFYR3AzZklJRUg4MWcxM3owMUxVT2l3MFpUQldVVGxhVktVWkJyMmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY4NTA2NTI4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYyOTAxNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQc1dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBzVy5qc29uIjogIntcImtleURhdGFcIjpcInpLTWRGVkdFMjczbFRhT1pIOTJhQ2lxa0g3WHNuSHVUdTJTQ0Z2OXUwZTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5Njg0OTk5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2MjkwMTYyMDAzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

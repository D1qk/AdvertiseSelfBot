const Discord = require("discord.js");
const client = new Discord.Client();
const delay = require('delay');

const token = "NjU5MDU3NTcxMjc3MDQ1Nzc4.XiCVOQ.pN20p4qCEQxz_fA9VDMDLdjXUPA"; // التوكن
let r = 6; //عدد أعلى الرتب إلي ما راح يوصلها النشر
const msg = `
> **Hypixel SkyBlock Purse Shop** !
>  • Trusted | Good Prices | Epic Support
> • **JOIN NOW** And get cheap hypixel skyblock Purse!
>  https://discord.gg/bmVAKcY`;

let x = 0;
let y = 0;

client.on('ready', async => {
    console.log(`Ready As ${client.user,tag}`)
    loop(client);
});

async function loop(client) {
  for (const guild of client.guilds) {
        try {
            send(client, guild);
        } catch(err) {
            console.log(`${guild.name}/Failed: ${y++}`);
        }
        await delay(60000);
    };
}

async function send(client, guild) {
  for (const member of guild.members) {
                if (((guild.roles.array().length-1) - member.highestRole.position) <= r-1 == true) return;
                await member.send(msg);
                console.log(`${guild.name}/Succeeded: ${x++}`);
                await delay(3000);
            };
}
client.login(token);

const Discord = require("discord.js");
const client = new Discord.Client();
const delay = require("delay");


let r = 6; //عدد أعلى الرتب إلي ما راح يوصلها النشر
const msg = `
> **Hypixel SkyBlock Purse Shop** !
>  • Trusted | Good Prices | Epic Support
> • **JOIN NOW** And get cheap hypixel skyblock Purse!
>  https://discord.gg/bmVAKcY`;

let x = 0;
let y = 0;

client.on('ready', async =>{
    console.log(`Ready As ${client.user.tag}`);
    try {
        loop(client);
    } catch (err) {
        console.log(`${guild.name}/Failed: ${y++}`);
    }
});

async function loop(client) {

    var guilds = await client.guilds.array();
    for (const guild of guilds) {
        await send(client, guild);
        await delay(60000);
    };

}

async function send(client, guild) {

    console.log(`Start Server: ${guild.name}`);
    
    var members = await guild.members.array();

    for (const member of members) {
        if (((guild.roles.array().length - 1) - member.highestRole.position) <= r - 1 == true) continue;
        await member.send(msg);
        console.log(`${guild.name}/Succeeded: ${x++}`);
        await delay(6000);
    };

}

client.login('NjU5MDU3NTcxMjc3MDQ1Nzc4.XiCVOQ.pN20p4qCEQxz_fA9VDMDLdjXUPA');

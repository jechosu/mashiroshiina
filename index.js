// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const mineflayer = require('mineflayer')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
const { pathfinder, Movements } = require('mineflayer-pathfinder')
const { GoalBlock } = require('mineflayer-pathfinder').goals
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const Discord = require('discord.js');

client.on('ready', () => {
client.user.setPresence({ activity: { name: 'Ready to go! | prefix is !' }, status: 'online' });
});
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 client.on('ready', () => {
client.user.setPresence({ activity: { name: 'stable build' }, status: 'online' });
});

client.on('message', message => {
const user = message.mentions.users.first();
client.users.cache.get('<id>');
mention = message.mentions.users.first();
 
client.once('ready', () => {
    console.log('Bot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message,args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message,args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message,args);
    } else if (command === 'commands') {
        client.commands.get('commands').execute(message,args);
    }

});
 
const bot = mineflayer.createBot({
    host: 'kolter.minehut.gg',
    username: 'xxakitowtkxx@live.jp', // minecraft username
    password: 'Krsm80169',          // minecraft password, comment out if you want to log into online-mode=false servers
    // port: 25565,                // only set if you need a port that isn't 25565
    // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})

// Redirect in-game messages to Discord channel
bot.on('chat', (username, message) => {
    // Ignore messages from the bot itself
    if (username === bot.username) return
    // ignore @everyone lmfao
    if (message.includes("@everyone")) return
    if (message.includes("@here")) return
    if (username.length < 3) return
    if (username.includes("<")) return
    if (username.includes(">")) return
    client.channels.cache.get('891755629633474561').send(`${username}: ${message}`)
})

bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3000 })
})

bot.on('kicked', console.log)
bot.on('error', console.log)

client.login('ODg4OTg5MjAyMjU0MDI4ODEy.YUattg.pKUh2I-ZyKicPKKWmrlmvCX-mUg');

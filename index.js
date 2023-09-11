// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

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
 
client.login('ODg4OTg5MjAyMjU0MDI4ODEy.YUattg.pKUh2I-ZyKicPKKWmrlmvCX-mUg');

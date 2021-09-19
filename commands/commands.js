module.exports = {
    name: 'commands',
    description: "This states the commands of the bot",
    execute(message, args){
        message.member.send('Using the prefix !, do !play (search term) to play something on YouTube by search. Additionally, use !play (url) to play a YouTube link. Use !leave to stop the music and make the bot leave.');
    }
}
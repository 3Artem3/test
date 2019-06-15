const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTc2NzUxMDk5OTMyMDQ5NDA4.XQTnXQ.RUGye8ZtNUUaI4xCNKIiP38x1Jg);

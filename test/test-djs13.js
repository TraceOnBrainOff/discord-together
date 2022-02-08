const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('../index.js');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => { 
    if (message.content === 'APESHIT') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => { 
                return client.application.owner.dmChannel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('Discord bot token');
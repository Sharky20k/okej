const commando = require(`discord.js-commando`)

class eChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "sharky",
            group: "komendy",
            memberName: "sharky",
            description: "pokazuje !sharky"
        });
    }

    async run(message, args)
    {
       if(message.content == "!sharky")
       {
        message.reply('STEAM: https://steamcommunity.com/profiles/76561198191453737')
       }
    }
}

module.exports = eChannelCommand;
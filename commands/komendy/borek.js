const commando = require(`discord.js-commando`)

class fChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "borek",
            group: "komendy",
            memberName: "borek",
            description: "pokazuje !borek"
        });
    }

    async run(message, args)
    {
       if(message.content == "!borek")
       {
        message.reply('STEAM: https://steamcommunity.com/profiles/76561198190410481')
       }
    }
}

module.exports = fChannelCommand;
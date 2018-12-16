const commando = require(`discord.js-commando`)

class gChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "kurwahuj",
            group: "komendy",
            memberName: "kurwahuj",
            description: "pokazuje !kurwahuj"
        });
    }

    async run(message, args)
    {
       if(message.content == "!kurwahuj")
       {
            message.reply('Error 301 \n P.S tylko maciek widzi tą komende.')
       }
    }
}

module.exports = gChannelCommand;
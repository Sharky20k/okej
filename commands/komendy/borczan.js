const commando = require(`discord.js-commando`)

class cChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "borczan",
            group: "komendy",
            memberName: "borczan",
            description: "pokazuje !borczan"
        });
    }

    async run(message, args)
    {
       if(message.content == "!borczan")
       {
        message.reply('Borczan to totalny kozak')
       }
    }
}

module.exports = cChannelCommand;
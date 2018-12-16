const commando = require(`discord.js-commando`)

class bChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "maciek",
            group: "komendy",
            memberName: "maciek",
            description: "pokazuje !maciek"
        });
    }

    async run(message, args)
    {
       if(message.content == "!maciek")
       {
        message.reply('Po papieżaka można zgłaszać się tu https://www.instagram.com/m_aciuss/')
       }
    }
}

module.exports = bChannelCommand;
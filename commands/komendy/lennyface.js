const commando = require(`discord.js-commando`)

class hChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "lennyface",
            group: "komendy",
            memberName: "lennyface",
            description: "pokazuje !lennyface"
        });
    }

    async run(message, args)
    {
       if(message.content == "!lennyface")
       {
        message.reply('( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)')
       }
    }
}

module.exports = hChannelCommand;
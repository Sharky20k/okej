const commando = require(`discord.js-commando`)

class aChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "komendy",
            group: "komendy",
            memberName: "komendy",
            description: "pokazuje !komendy"
        });
    }

    async run(message, args)
    {
       if(message.content == "!komendy")
       {
            message.reply('W wersji 0.2 mamy nastepujące komendy: !on <link yt> (dodaje bota na kanał i gra piosenkę), !off (odłącza bota z kanału), !szczurcoin, !marynarz, !borczan, !admin, !borek, !sharky, !maciek, !lennyface, !komendy')
       }
    }
}

module.exports = aChannelCommand;
const commando = require(`discord.js-commando`)

class RockFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "marynarz",
            group: "simple",
            memberName: "marynarz",
            description: "Papier, kamień, nożyce"
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0)
        {
            message.reply("Papier!!")
        }
        if(chance == 1)
        {
            message.reply("Kamień!!")
        }
        if(chance == 2)
        {
            message.reply("Nożyce!!")
        }   
    }
}

module.exports = RockFlipCommand;
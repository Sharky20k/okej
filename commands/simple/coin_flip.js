const commando = require(`discord.js-commando`)

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "szczurcoin",
            group: "simple",
            memberName: "szczurcoin",
            description: "Rzuca monetą, ląduje na Szczurku lub Groszku"
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Moneta wylądowała na Szczurku!")
        }
        else
        {
            message.reply("Moneta wylądowała na Groszku!")
        }   
    }
}

module.exports = CoinFlipCommand;
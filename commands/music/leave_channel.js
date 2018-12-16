const commando = require(`discord.js-commando`)

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "off",
            group: "music",
            memberName: "off",
            description: "Wychodzi z twojego kanału głosowego"
        });
    }

    async run(message, args)
    {
       if(message.guild.voiceConnection)
       {
           message.guild.voiceConnection.disconnect();{
               message.reply("Pomyślnie odłączono")
           }
           
       }
       else
       {
           message.reply("Muszę być na kanale głosowym, aby mnie wyrzucić");
       }
    }
}

module.exports = LeaveChannelCommand;
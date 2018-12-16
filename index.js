const Commando = require('discord.js-commando')
const client = new Commando.Client()

client.registry.registerGroup('simple', 'Simple');
client.registry.registerGroup('komendy', 'Komendy');
client.registry.registerGroup('music', 'Music');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands')

global.servers = {};

client.on('ready', () => {
    console.log("jestem na serwerze jako " + client.user.tag)

    client.user.setActivity("hentaje", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // General channel id: 522455884060950590
    })

    let generalChannel = client.channels.get("522455884060950590")
    generalChannel.send("Knutobot wbija na serwer. Listę komend znajdziesz pod !komendy")

})

client.login(process.env.xd)

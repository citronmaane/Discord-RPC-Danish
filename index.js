// Lavet af marcus.#6969
// Opdateret Version af Discord RPC | Version 1.0 - Flere opdateringer vil komme.
const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Din tekst her',
        // state: 'Skal vi dele en citronmåne?',
        startTimestamp: new Date(),
        largeImageKey: 'Dit google link her',
        // Linket til det store billede, brug google billede links.
        largeImageText: 'Din tekst her',
        // Tekst der skal stå når man holder musen over det store billede.
        smallImageKey: 'Dit google link her',
        // Linket til det lille billede som er nede i hjørnet. Skal også være google billede links.
        smallImageText: 'Din tekst her',
        // Tekst der skal stå når man holder musen over det lille billede.
        buttons: [{
            label: 'Din tekst her',
            url: 'https://google.com'
        }, {
            label: 'Din tekst her',
            url: 'https://google.com'
        }]
    });
    console.log('Discord RPC er nu startet og køre uden problemer.');
    // Hvad den skal sige når RPC er startet.
})

rpc.login(
    {
        clientId: 'Sæt id ind her'
        // Din applications clientId.
    }
)
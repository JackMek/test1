const Discord = require('discord.js');
const client = new Discord.Client();
const channelID = '428140388105322496';

var listPlayers = [
'Action'
,'Aetereus'
,'AlexinhoM1lano'
,'Alfio'
,'Orzabal'
,'Popmauro'
,'AndyZ'
,'Aria Curran'
,'Barse Ponap'
,'Bora'
,'Cervantes'
,'Dani El'
,'Della mol'
,'Dessel Autem'
,'Diegus Prime'
,'Ev Ersor'
,'Foo'
,'g inetto'
,'Gaio'
,'Hataru'
,'marco70h17'
,'ISB Vasa'
,'Alfio1'
,'Jade Bele'
,'LarrylafferJedi'
,'Lucyphress'
,'Lukeluke'
,'Maxwayne'
,'MinandaXY'
,'Feh Sans'
,'Mttmgg'
,'Nando1908'
,'OP1Kenobi'
,'Pantegana'
,'50esimo'
,'Rag MARINO'
,'Raist'
,'Ric'
,'RobOneKenoby'
,'rogueone'
,'Shadowolf'
,'Silvestrina'
,'Sky Fly'
,'Sossio'
,'Starkyller'
,'The Architect'
,'Thron70'
,'Thunder'
,'tompson mods'
,'Wes'];

var lenList = listPlayers.length;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let i = parseInt(args[0]) || 0;
    
    if ( (command === 'list') && (i !== 'undefined') && (i != 0) && (i<54) ) {
        
         if (i == lenList+2){
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[0] + " \n 2° - " + listPlayers[1] + " \n 3° - " + listPlayers[2]);
             client.channels.get(channelID).send("\n\n Prossimo valore da usare list 5");
         }
        else if (i == lenList+1){
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[lenList-1] + " \n 2° - " + listPlayers[0] + " \n 3° - " + listPlayers[1]);
            client.channels.get(channelID).send("\n\n Prossimo valore da usare list 4");
        }
        else if (i == lenList){
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[lenList-2] + " \n 2° - " + listPlayers[lenList-1] + " \n 3° - " + listPlayers[0]);
            client.channels.get(channelID).send("\n\n Prossimo valore da usare list 3");
        }
        else{
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[i-2] + " \n 2° - " + listPlayers[i-1] + " \n 3° - " + listPlayers[i]);
            i = parseInt(i) + 3;
            client.channels.get(channelID).send("\n\n Prossimo valore da usare list " + i);
        }
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

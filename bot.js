const Discord = require('discord.js');
const client = new Discord.Client();
const channelID = '428140388105322496';

var listPlayers = [
'Action'
,'Aetereus'
,'AlexinhoM1lano'
,'Alfio'
,'New - Athenstankhan,
,'Anakin81'
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
,'Insidious'
,'ISB Vasa'
,'JackMek'
,'Jade Bele'
,'LarrylafferJedi'
,'Lucyphress'
,'Lukeluke'
,'Maxwayne'
,'MinandaXY'
,'New-Feh Sans'
,'Mttmgg'
,'Nando1908'
,'OP1Kenobi'
,'Pantegana'
,'Popmauro'
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

var i = 4;
var lenList = listPlayers.length;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'list') {
        if (i == lenList+2){
            i = 2;
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[i-2] + " \n 2° - " + listPlayers[i-1] + " \n 3° - " + listPlayers[i]);
        }
        else if (i == lenList+1){
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[lenList-1] + " \n 2° - " + listPlayers[0] + " \n 3° - " + listPlayers[1]);
            i = 4;
        }
        else if (i == lenList){
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[lenList-2] + " \n 2° - " + listPlayers[lenList-1] + " \n 3° - " + listPlayers[0]);
            i = 3;
        }
        else{
            client.channels.get(channelID).send("@everyone \n Possono finalizzare i seguenti utenti: \n 1° - " + listPlayers[i-2] + " \n 2° - " + listPlayers[i-1] + " \n 3° - " + listPlayers[i]);
            i += 3;
        }
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

var listPlayers = [
'Insidious'
,'tompson mods'
,'Barse Ponap'
,'Alfio1'
,'Cervantes'
,'Raist'
,'AndyZ'
,'Limo'
,'Wes'
,'Dessel Autem'
,'Maxwayne'
,'Frenzen'
,'Rag MARINO'
,'Thunder'
,'MinandaXY'
,'accadueodue'
,'Jade Bele'
,'AlexinhoM1lano'
,'JackMek'
,'Sky Fly'
,'The Architect'
,'OP1Kenobi'
,'g inetto'
,'Shadowolf'
,'Nando1908'
,'LarrylafferJedi'
,'Lucyphress'
,'RobOneKenoby'
,'Popmauro'
,'Gaio'
,'Starkyller'
,'rogueone'
,'Ev Ersor'
,'Ric'
,'Dani El'
,'Della mol'
,'Diegus Prime'
,'ISB Vasa'
,'Silvestrina'
,'Aetereus'
,'Hataru'
,'Thron70'
,'Alfio'
,'Foo'
,'Bora'
,'Pantegana'
,'Action'
,'Mttmgg'
,'Lukeluke'
,'Aria Curran'];

var i = 2;
var lenList = listPlayers.length -1;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'list') {
        if (i == lenList + 3){
            i = 2;
            message.reply("Possono finalizzare i seguenti utenti: " + listPlayers[i-2] + " , " listPlayers[i-1] + " , " listPlayers[i]);
        }
        else if (i == lenList + 2){
            message.reply("Possono finalizzare i seguenti utenti: " + listPlayers[i-lenList-1] + " , " listPlayers[i-lenList-2] + " , " listPlayers[i-2]);
            i = 2;
        }
        else if (i == lenList + 1){
            message.reply("Possono finalizzare i seguenti utenti: " + listPlayers[i-lenList-1] + " , " listPlayers[i-1] + " , " listPlayers[i]);
            i = 2;
        }
        else{
            message.reply("Possono finalizzare i seguenti utenti: " + listPlayers[i-2] + " , " listPlayers[i-1] + " , " listPlayers[i]);
            i+=3;
        }
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

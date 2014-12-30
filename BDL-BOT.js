(function () {
//Define our function responsible for extending the bot.
function extend() {
//If the bot hasn't been loaded properly, try again in 1 second(s).
if (!window.bot) {
return setTimeout(extend, 1 * 1000);
}
//"afkremove": "@%%NAME%%, você foi removido por estar afk durante %%TIME%%. Você estava na posição %%POSITION%%. Fale pelo menos uma vez no chat em %%MAXIMUMAFK%% minutos se você quer tocar alguma musica.",
//Precaution to make sure it is assigned properly.
var bot = window.bot;
//Load custom settings set below
bot.retrieveSettings();
//bot.commands.decommanddagewiledittenCommand.rank = 'user';
bot.commands.kickCommand.rank = 'bouncer';
bot.commands.killCommand.rank = 'manager';
bot.commands.pingCommand.rank = 'bouncer';
//bot.commands.lockskipCommand.command = 'randomcmd';

function autowoott(){
$('#woot').click();
}
API.on(API.ADVANCE, autowoott);

function deleteWords(chat) {
var msg = chat.message.toLowerCase();
var _array = ["se foder", "tnc", "toma no cu", "vtnc", "vsf", "puta", "put*", "vadia", "vadio", "att", "attwhore", "nigga", "niga", "nigger", "niqa", "niqqa", "negro", "niqua", "niggga", "niggr", "niggie", "niggi", "negr0", "n3gro", "n3gr0"];
for (var i = 0; i < _array.length; i++) {
if (msg.indexOf(_array[i]) != -1) {
API.moderateDeleteChat(chat.cid);
return;
}
}
}
API.on(API.CHAT, deleteWords);
/*
Extend the bot here, either by calling another function or here directly.
Model code for a bot command:
bot.commands.commandCommand = {
command: 'cmd',
rank: 'user/bouncer/mod/manager',
type: 'startsWith/exact',
functionality: function(chat, cmd){
if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if( !bot.commands.executable(this.rank, chat) ) return void (0);
else{
//Commands functionality goes here.
}
}
}
*/

bot.commands.slotCommand = {
command: 'slots',
rank: 'manager',
type: 'exact',
functionality: function(chat, cmd){
if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if( !bot.commands.executable(this.rank, chat) ) return void (0);
else{
var items = Array(":helicopter:", ":coffee:", ":hamburger:", ":fries:", ":car:", ":heart:", ":anchor:", ":shipit:", ":speedboat:", ":rocket:", ":boat:", ":baseball:", ":8ball:" ,":gem:", ":bulb:", ":key:", ":santa:",":horse:", ":zap:", ":sunny:", ":frog:", ":whale:", ":chicken:", ":rose:");
//var items = Array(":helicopter:", ":coffee:");
var waitlistPos = (API.getWaitListPosition() + 1);
var newWaitlistPos = ((API.getWaitListPosition() + 1) - 3);
var userID = chat.uid;
var item1 = items[Math.floor(Math.random()*items.length)];
var item2 = items[Math.floor(Math.random()*items.length)];
var item3 = items[Math.floor(Math.random()*items.length)];
if((item1 == item2 && item1 != item3) || (item2 == item3 && item2 != item1) || (item3 == item1 && item3 != item2)){
//move 3 spots
API.sendChat("@" + chat.un + " " + item1 + " | " + item2 + " | " + item3 + " Vocês ganharam, movendo para 3 posicões!");
if(chat.un == "Dr. Goom"){
API.sendChat("@" + chat.un + " Voce nao tem permissao, noob.");
return;
}
if(waitlistPos == 0){
//niet in wachtlijst
console.log("Adicionando " + chat.un + " to waitlist");
setTimeout(function(){ API.moderateAddDJ(userID); }, 100);
console.log("Movendo " + chat.un + " para a 1ª posição");
setTimeout(function(){ API.moderateMoveDJ(userID, 1); }, 800);
} else if(waitlistPos >= 2 && waitlistPos <=3){
//tussen spot 2 & 3
console.log("Movendo " + chat.un + " para a 1ª posição");
setTimeout(function(){ API.moderateMoveDJ(userID, 1); }, 100);
} else if(waitlistPos > 4){
//boven spot 4
console.log("Movendo " + chat.un + " para a - 3ª posição");
setTimeout(function(){ API.moderateMoveDJ(userID, (waitlistPos -3)); }, 100);
}
} else if(item1 == item2 && item1 == item3){
//Jackspot : first place
API.sendChat("@" + chat.un + " " + item1 + " | " + item2 + " | " + item3 + " JACKPOT! PRIMEIRA POSIÇÃO!");
if(chat.un == "Dr. Goom"){
API.sendChat("@" + chat.un + " Você não tem permissão, noob.");
return;
}
if(waitlistPos == 0){
//niet in wachtlijst
console.log("Adicionando " + chat.un + " na lista de espera");
setTimeout(function(){ API.moderateAddDJ(userID); }, 100);
console.log("Movendo " + chat.un + " para a 1ª posição");
setTimeout(function(){ API.moderateMoveDJ(userID, 1); }, 800);
} else if(waitlistPos >= 1){
//boven spot 1
console.log("Movendo " + chat.un + " para a 1ª posição");
setTimeout(function(){ API.moderateMoveDJ(userID, 1); }, 100);
}
} else {
API.sendChat("@" + chat.un + " " + item1 + " | " + item2 + " | " + item3 + " Vocês perderam!");
setTimeout(function(){ API.moderateDeleteChat(chat.cid); }, 5000);
}
}
}
}

bot.commands.origemwootCommand = {
command: 'origemwoot',
rank: 'user',
type: 'exact',
functionality: function(chat, cmd){
if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if( !bot.commands.executable(this.rank, chat) ) return void (0);
else{
API.sendChat("/me O Origem Woot é um javascript que oferece ferramentas para deixar seu plug.dj de cara nova com algumas funções para facilitar sua vida no plug, o Script Origem Woot foi Criado por Caipira, Mr. Assis e Sweet. http://origemwoot.weebly.com/");
}
}
}

bot.commands.plugnotesCommand = {
command: 'plugnotes',
rank: 'user',
type: 'exact',
functionality: function(chat, cmd){
if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if( !bot.commands.executable(this.rank, chat) ) return void (0);
else{
API.sendChat("/me :musical_note: Plug Notes oferecem uma maneira de mostrar seu apoio ao plug.dj, ajudando a nos manter funcionando, melhorando e adicionando as funcionalidades que vocês mais pedem, como a pesquisa na playlist e aplicativo para celular, para que o plug.dj continue sendo um lugar para você descobrir e compartilhar suas novas músicas favoritas com outras pessoas de todo o mundo! Mais Informacoes em : http://goo.gl/IAYT6I :musical_note: ");
}
}
}

/*
bot.commands.demoteAfkCommand = {
command: 'afk',
rank: 'manager',
type: 'exact',
functionality: function(chat, cmd){
if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if( !bot.commands.executable(this.rank, chat) ) return void (0);
else{
var staff = API.getStaff();
for(var i = 0; i < staff.length; i++){
//Fяσรтy Ƭɦε ᙖαรร = 3998944;
//Marie = 3824462;
//SirLydian = 3690649;
//OfficialPollux = 3687889;
//RabbitFish = 4031219
//TrillChazzy = 3443090
//TopGearDog = 3646501
//Putty Patrol = 4399595
//Pool = 3440508
//SpaceCadet = 3811195
if(this.type === 'exact' && chat.message.length === cmd.length && (staff[i].id === 3998944 || staff[i].id === 3824462 || staff[i].id === 3687889 || staff[i].id === 4031219 || staff[i].id === 3443090 || staff[i].id === 3646501 || staff[i].id === 4399595 || staff[i].id === 3440508 || staff[i].id === 3811195) && staff[i].id === chat.uid){
var from = chat.un;
API.sendChat("[Despromovendo @" + chat.un + " para que eles possam ficar AFK!]");
API.moderateSetRole(chat.uid, API.ROLE.NONE);
}
}
}
}
}
/*
bot.commands.promoteAfkCommand = {
command: 'back',
rank: 'user',
type: 'exact',
functionality: function(chat, cmd){
if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if( !bot.commands.executable(this.rank, chat) ) return void (0);
else{
//Fяσรтy Ƭɦε ᙖαรร = 3998944;
//Marie = 3824462;
//SirLydian = 3690649;
//OfficialPollux = 3687889;
//RabbitFish = 4031219
//TrillChazzy = 3443090
//TopGearDog = 3646501
//Putty Patrol = 4399595
//Pool = 3440508
//SpaceCadet = 3811195
if(this.type === 'exact' && chat.message.length === cmd.length){
switch(chat.uid) {
case 3998944:
case 3824462:
case 3687889:
case 4031219:
case 3443090:
case 3646501:
case 4399595:
case 3440508:
case 3811195:
var from = chat.un;
API.sendChat("[Promovendo @" + chat.un + "!]");
API.moderateSetRole(chat.uid, API.ROLE.MANAGER);
break;
default:
break;
}
}
}
}
}
*/
//Mehs to skip function
var isRecent = false;
var mehLimit = Infinity;
function callback() {
if (API.getScore().negative < mehLimit || isRecent) return;
isRecent = true;
API.sendChat("@" + API.getDJ().username + " Esta musica será pulada porque chegou ao limite de "+mehLimit+"!");
API.moderateForceSkip();
setTimeout(function(){
isRecent = false;
}, 10000);
}
API.on(API.VOTE_UPDATE, callback);
API.on(API.ADVANCE, function(obj){
var WaitlistCount = API.getWaitList().length;
if(WaitlistCount <= 45){
var mehSkipCount = Math.round((WaitlistCount / 3) + 2);
if(mehSkipCount < 10){
mehSkipCount = 10;
}
}
mehLimit = mehSkipCount;
setTimeout(function(){
//API.sendChat("/me Mehs para pular: " + mehLimit);
}, 10000);
});
function checkManagers(){
var managerPresent = false;
var staff = API.getStaff();
for(var i = 0; i < staff.length; i++){
if(staff[i].role === 3 && staff[i].id !== 3998944){
managerPresent = true;
}
}
var newSetting = true;
if(managerPresent){
newSetting = false;
}
if(bot.settings.bouncerPlus !== newSetting){
if(newSetting){
API.sendChat("/me Bouncer+ ativado!");
//als je bouncerplus aanzet
}else{
API.sendChat("/me Bouncer+ desativado!");
//als uitzet
}
bot.settings.bouncerPlus = newSetting;
}
}
//check manager for bouncer+
API.on(API.USER_JOIN, checkManagers);
API.on(API.USER_LEAVE, checkManagers);
//$("div.item.s-av").click();
setTimeout(function(){$("div.info").click();}, 4000);
setTimeout(function(){$("div.item.settings").click();}, 6000);
setTimeout(function(){$("div.item.s-av").click();}, 8000);
setTimeout(function(){$("div.back").click();}, 10000);
//Load the chat package again to account for any changes
bot.loadChat();
}
//Change the bots default settings and make sure they are loaded on launch


    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "MR. Bot",
        language: "portuguese",
        chatLink: "https://rawgit.com/Mr-BOT/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 90,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: true,
        maximumLocktime: 5,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 06,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["tema", "Esse video não combina com o tema da sala. "],
            ["op", "Esse video está na lista de OP."],
            ["historico", "Esse video está no historico. "],
            //["mix", "Você tocou um mix, é contra as regras da sala. "],
            ["som", "O video que você tocou tem uma qualidade ruim, ou não tem nada. "],
            ["nsfw", "Esse video contém NSFW (imagem). "],
            ["bug", "O video que você botou não está liberado para alguns usuarios. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 5,
        motd: ["Vote para não ser removido / Woot or you will be removed from the waitlist. "],
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://pastebin.com/WNYSq5YA",
        themeLink: "Permitido todo tipo de musica dentro de EDM até 5:30 Minutos! Proibido : |NSFW!| Axe, padoge, funk, paródias; rock, rap, reggae .",
        fbLink: "https://www.facebook.com/groups/875436085804060/",
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/SirLydian/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/SirLydian/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Mr-BOT/basicBot/master/basicBot.js', extend);
    $.getScript('https://rawgit.com/Mr-BOT/TheBanHammer/master/BanHammer.js');
    $.getScript('https://dl.dropboxusercontent.com/s/yo4qmo0xfynepkt/SIMSIMI-USER.txt?dl=0');
}).call(this);

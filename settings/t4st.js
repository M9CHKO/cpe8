//const {createClient} = require('bedrock-protocol');
const bedrock = require('bedrock-protocol');
const basa = require("./basa.json")
const settings = require("./settings.json")
const {Vec3} = require('vec3');
function minecrafrBot() {
const client = bedrock.createClient({
  host: 'cpe.ign.gg',   // optional
  port: 19132,         // optional, default 19132
  username: 'Notch',   // the username you want to join as, optional if online mode
  offline: false     // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
})

client.on('spawn', client => {
  spam =  settings.spam,
  packe =  settings.packe,
  player = settings.player})

client.on('text', (packet) => {
  if (packe)
  {
    client.on("text", (packet) => {
      if (packet.source_name != client.options.username) {
          var str = `${packet.message}`;
          lil = str.replace(/§e/g, '');
          lil2 = lil.replace(/§a/g, '');
          lil3 = lil2.replace(/§f/g, '');
          lil4 = lil3.replace(/§c/g, '');
          lil5 = lil4.replace(/§l/g, '');
          lil6 = lil5.replace(/§b/g, '');
          lil7 = lil6.replace(/§6/g, '');
          lil8 = lil7.replace(/§5/g, '');
          lil9 = lil8.replace(/§3/g, '');
          lil10 = lil9.replace(/§1/g, '');
          lil11 = lil10.replace(/§2/g, '');
          lil12 = lil11.replace(/§3/g, '');
          lil13 = lil12.replace(/§4/g, '');
          lil14 = lil13.replace(/§5/g, '');
          lil15 = lil14.replace(/§6/g, '');
          lil16 = lil15.replace(/§7/g, '');
          lil17 = lil16.replace(/§8/g, '');
          lil18 = lil17.replace(/§9/g, '');
          lil19 = lil18.replace(/§r/g, '');
          lil20 = lil19.replace(/§d/g, '');
          lil21 = lil20.replace(/§b/g, '');
          lil22 = lil21.replace(/@here/g, '');
          lil23 = lil22.replace(/@everyone/g, '');
          lil24 = lil23.replace(/§q/g,'');
          lil25 = lil24.replace(/§w/g,'');
          lil26 = lil25.replace(/§e/g,'');
          lil27 = lil26.replace(/You are being rate limited/g,'');
          lil28 = lil27.replace(/That pointless chatter shall not pass/g,'');
          lil29 = lil28.replace(/§y/g,'');
          lil30 = lil29.replace(/§u/g,'');
          lil31 = lil30.replace(/§i/g,'');
          lil32 = lil31.replace(/§o/g,'');
          lil33 = lil32.replace(/§p/g,'');
          lil34 = lil33.replace(/§a/g,'');
          lil35 = lil34.replace(/§s/g,'');
          lil36 = lil35.replace(/§d/g,'');
          lil37 = lil36.replace(/§f/g,'');
          lil38 = lil37.replace(/§g/g,'');
          lil39 = lil38.replace(/§h/g,'');
          lil40 = lil39.replace(/§j/g,'');
          lil41 = lil40.replace(/§k/g,'');
          lil42 = lil41.replace(/§l/g,'');
          lil43 = lil42.replace(/§z/g,'');
          lil44 = lil43.replace(/§x/g,'');
          lil45 = lil44.replace(/§c/g,'');
          lil46 = lil45.replace(/§v/g,'');
          lil47 = lil46.replace(/§b/g,'');
          lil48 = lil47.replace(/§n/g,'');
          lil49 = lil48.replace(/§m/g,'');
          console.log(lil49);
         // hook.send(`**${lil49}**`);
    }}
    )
    
  }
  if (spam)
  {
    client.once('text', (packet) => {
      if (packet.source_name != client.options.username) {
          for (var i = 0; i < 1000; i++) {
              setTimeout(function() {
                  k1 = ['S','Q','1','K','i','G','f','2','lol'];k2 = ['l','9','p','T','y','m','B','6','W'];k3 = ['H','v','1','9','c','G','y','3'];w = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x', 'c','v','b','n','m',];o = ['e','y','u','i','o','a',];s = ['coping','nigga','stop','typ','noy','ezz', 'uWu', 'russian'];
                  mes = ['FUCKING S H I T','MY GRANDMA RUNS QUICKER THEN YOU','QUIT LARPING OVER NIGGAWARE BRO','NIGGAWARE OWNS ALL NNS LIKE YOU','Speak IF GAY',
                         'KOLD HEARTED IS THE BIGGEST NN','DOX','GAY','CRONNOS+ WANTS THIS CLIENT','DANKMEME LOVES ME SO MUCH','DEATHBAY GIVE ME A BLOWY','MY DAD IS STILL WITH ME',
                         'BLACK ASS MF LARPING','MEOW UWU TO YOU TOO','MEOW','RAWR','EZZZZ','NIGAaa','IM AUTISTIC','NOT A GOOD','POO POO STINKY LARLARP','GRANDMA STOP COPING',
                         'MEOWWWWWWWW','SHIT ON BY NIGGAWARE','M9CHKO ON TOP','Someone ask whos KING-THAT ME','Your like a bozo when make driple driple','Just stop spamming me in dms for the dupe',
                         'Give your coordinates so you have a crater','Stfu nigga dont like me','Stop coping so much bastard','Ez pop you gonna be cry','Everyone hate me beacuse im best',
                         'Stop fucking says UwU','Stop you replaced in hacking','You do the work as a slave','The dupe will be fixed in 10 days','Coordinates of the base of 372791 1038','What did you say?',
                         'No one asked so be a good shutter','クソたわごと','私の祖父母はより速く走りますそしてあなたは','NIGGAWAREBROでLARPを終了する','KOLDHEARTEDは最大のNNです','372791 1038のベースの座標',
                         '誰もが私を憎む','Stfu niggaは私が好きではありません','Ez popあなたは泣くつもりです','デュープは10日で修正されます','誰も尋ねなかったので、良いシャッターになります','ドリプルをドリプルにするときのボゾのように',
                         'あなたがクレーターを持っているようにあなたの座標を与えてください','誰かがKING-THATMEを尋ねる','誰も尋ねなかったので、良いシャッターになります','CRONOS+はこのクライアントを望んでいます',
                         '誰もが私を憎む','何って言ったの？','????????????????','IM自閉症','ハッキングで取り替えたのをやめなさい','私の祖父母はより速く走りますそしてあなたは',
                        ];
                  const randomJokes1 = w;
                  const randomIndex1 = Math.floor(Math.random() * randomJokes1.length);
                  const q1 = randomJokes1[randomIndex1];
                  const randomJokes2 = o;
                  const randomIndex2 = Math.floor(Math.random() * randomJokes2.length);
                  const q2 = randomJokes2[randomIndex2];
                  const randomJokes3 = w;
                  const randomIndex3 = Math.floor(Math.random() * randomJokes3.length);
                  const q3 = randomJokes3[randomIndex3];
                  const randomJokes4 = o;
                  const randomIndex4 = Math.floor(Math.random() * randomJokes4.length);
                  const q4 = randomJokes4[randomIndex4];
                  const randomJokes5 = w;
                  const randomIndex5 = Math.floor(Math.random() * randomJokes5.length);
                  const q5 = randomJokes5[randomIndex5];
                  const randomJokes6 = mes;
                  const randomIndex6 = Math.floor(Math.random() * randomJokes6.length);
                  const mesa =randomJokes6[randomIndex6];
                  const randomJokes7 = w;
                  const randomIndex7 = Math.floor(Math.random() * randomJokes7.length);
                  const q7 = randomJokes3[randomIndex7];
                  const randomJokes8 = k2;
                  const randomIndex8 = Math.floor(Math.random() * randomJokes8.length);
                  const q8 = randomJokes8[randomIndex8];
                  const randomJokes9 = w;
                  const randomIndex9 = Math.floor(Math.random() * randomJokes9.length);
                  const q9 = randomJokes9[randomIndex9];
                  const randomJokes10 = o;
                  const randomIndex10 = Math.floor(Math.random() * randomJokes10.length);
                  const q10 =randomJokes10[randomIndex10];
                  const randomJokes11 = mes;
                  const randomIndex11 = Math.floor(Math.random() * randomJokes11.length);
                  const me = randomJokes11[randomIndex11];
                  const randomJokes12 = k2;
                  const randomIndex12 = Math.floor(Math.random() * randomJokes12.length);
                  const q12 = randomJokes12[randomIndex12];
                  const randomJokes13 = k3;
                  const randomIndex13 = Math.floor(Math.random() * randomJokes13.length);
                  const q13 = randomJokes13[randomIndex13];
             //   console.log(q1+q2+q3+q4+q1+ ' ' +q5+q6+q3+q1+'   |'+ q11+q12+q13+q1+q3+q11) 
                  client.queue('text', {
                  type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
                  message: ">"+q1+q13+q4+q12+q8+ '|   '+me+'   |'+q12+q13+q9+q2+q13+q3
                  }); },10 * 6400 * (i + 1))}}})}})









                  
client.on("add_player", (packet) => {
  if (player)
  {
    if (packet.username === basa.NickBasa1){}
    else if (packet.username === basa.NickBasa2){}
    else {console.log("- Тревога _",packet.username)}
  }
})


function stopp(){
  client.close()
  console.log('Bot close')
}
module.exports.stopp = stopp



}


module.exports.minecrafrBot = minecrafrBot;


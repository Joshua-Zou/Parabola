
const version = "1.9.101";
var colors = require("colors")
const chrono = require('chrono-node');
var request = require('request');
colors.enable();
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
const covid = require('novelcovid');
covid.settings({
    baseUrl: 'https://disease.sh' || 'https://api.caw.sh' || 'https://corona.lmao.ninja'
})
var RedditAPI = require('reddit-wrapper-v2');
var subreddit = "cleanmemes"
var reddit = new RedditAPI({
        // Options for Reddit Wrapper
        username: 'jacobsmith11076',
        password: 'monkey2008',
        app_id: 'ZULwjIzZYupe9g',
        api_secret: 'Nj_nqqcZLtOxH6ijHObkjpF78qzHmg',
        user_agent: 'user agent for your bot',
        retry_on_wait: true,
        retry_on_server_error: 5,
        retry_delay: 1,
        logs: true
    });
const urban = require('relevant-urban');
var mexp = require("math-expression-evaluator")
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const translate = require("@vitalets/google-translate-api")
const { quadSolver, getVersion } = require("quadratic-solver");
const cubic = require("linear-quadratic-cubic-eq-solver");
const nerdamer = require('nerdamer/all');
require('nerdamer/Algebra.js');
require('nerdamer/Calculus.js');
require('nerdamer/Solve.js');
const solver = require('@metadelta/solver');
const owoify = require('owoifyx');
const imageSearch = require('image-search-google');
const imageoptions = {page:1};
const queue = new Map();
const fetch = require('node-fetch');
var googlelink;
var args;
var queueContruct;
var prettylink;
var personality;
var urbanfunction = "disabled";
var vent;
const {createApi} = require('unsplash-js');
let condition = "yes"
var roasttest = ["No, I do not want to hear you play the ukulele.", "People always say I have no friends, but that’s not true. Every person I’ve asked out wants to be friends.", "Taking care of plants is not a suitable replacement for having friends, but I think you’re gonna need more plants.","You look like an 'after' photo when Sadness from Inside Out went in for rehab.\nhttps://tenor.com/view/blue-cry-sad-bad-day-gif-5337197","You are only asking for friends so you can finish your thesis on 'the Patriarchy.'", "I’ve always been told I had no friends The 12 voices in my head disagree", "What do you call a 23 year old guy with no friends, depression, social anxiety and no job? An average redditor"];
var rickroll = ["https://www.youtube.com/watch?v=6-HUgzYPm9g", "https://www.youtube.com/watch?v=G8iEMVr7GFg", "https://www.youtube.com/watch?v=AyOqGRjVtls", "https://www.youtube.com/watch?v=6mhmcwmgWbA&list=LLh0zI6HBoJh3w94SSuZs4Hg&index=160&t=0s", "https://www.youtube.com/watch?v=SpZ2FsEfwP4", "https://www.youtube.com/watch?v=H01BwSD9eyQ","https://www.youtube.com/watch?v=nrsnN23tmUA","https://www.youtube.com/watch?v=sO4wVSA9UPs","https://www.youtube.com/watch?v=rrs0B_LM898","https://www.youtube.com/watch?v=epyRUp0BhrA","https://www.youtube.com/watch?v=uK5WDo_3s7s","https://www.youtube.com/watch?v=wzSVOcgKq04&feature=emb_title"]
var dbwords;
var badwords;
let banned = 0;
var prefix = "~";
var prefixlength = 1;
///
const fs = require('fs');
const discord = require('discord.js');
const Discord = discord;
const client = new discord.Client({ disableMentions: 'everyone' });
const {MongoClient} = require('mongodb')
const { Player } = require('discord-player');
client.config = require('./config/bot.js')
const imageclient = new imageSearch(client.config.googleImage.token, client.config.googleImage.key);
const uri = client.config.mongodb;
const mongoclient = new MongoClient(uri, {poolSize: 10, bufferMaxEntries: 0, useNewUrlParser: true,useUnifiedTopology: true});
mongoclient.connect(async function(err, mongoclient){
client.player = new Player(client);
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();
client.login(client.config.discord.token);
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);

    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
client.once('ready', () => {

  console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
  client.user.setActivity(client.config.discord.activity);
})
client.on("message", message => {
  if (message.author.bot || message.channel.type === 'dm') return;
  if (message.content.toLowerCase().includes("undefined") || message.content.toLowerCase().includes("'undefined'") || message.content.toLowerCase().includes('"undefined"')) return;

  test3().catch(console.error);


  ////////start of normal checkStuff

  async function test3(){
  await main().catch(console.error);
  }
  if (message.content.startsWith(prefix+"help admin")||message.content.startsWith("~help admin")){
        if (message.member.hasPermission('ADMINISTRATOR')){

          let random = new Discord.MessageEmbed()
            .setColor('#18492a')
            .setTitle("help admin menu")
            .addFields(
        		{ name: prefix+'blacklist [word]', value:'blacklists the specified word, and makes it so censor bot will delete the *entire* message if it detects a message containing a blacklisted word', inline: true },
            { name: prefix+'delist [word]', value: 'delists the specified word', inline: true },
            { name: prefix+'show blacklist', value: 'shows the blacklist', inline: true },
            { name: prefix+'check infractions @someone', value: 'this will show you stats of the person that the id specifies', inline: true },
            { name: prefix+'clear infractions @someone', value: "this will clear all of a user's infractions", inline: true},
            { name: prefix+'show channel restrictions', value: "shows the channels that the bot doesn't work in", inline: true},
            { name: prefix+'reward @someone', value: 'this will reward the member specified social credit points. After you run this command, I will ask you how many points you want to gift. (you can also enter a negative)', inline: true },
            { name: prefix+'change counting channel [channel]', value: "changes where I look for counting, and this doesn't reset counts.", inline: true},
            { name: prefix+'change prefix [prefix]', value: 'you can change my prefix, but it has to be less than three characters.', inline: true},
            { name: prefix+"help features", value: 'An extended help menu that lets you enable/disable features', inline: true}
          )
            message.channel.send(random);
      }
      else{
        message.channel.send("you are not authorized to use this command");
      }
      }
  if (message.content.startsWith(prefix+"help features")){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("you can't run this command");
    }
    let random = new Discord.MessageEmbed()
      .setColor('#18492a')
      .setTitle("help features menu")
      .addFields(
      { name: prefix+'disable channel', value: 'disables the channel that the message was sent in', inline: false },
      { name: prefix+'enable channel', value: 'enables the channel that the message was sent in', inline: false },
      { name: prefix+'disable tts blocking', value: "Disables tts blocking", inline: false},
      { name: prefix+'enable tts blocking', value: "Deletes a user's message when they send a tts message.", inline: true},
      { name: prefix+'disable urban', value: 'Is disabled by default, and disables the urban command that searches the urban dictionary', inline: false},
      { name: prefix+'change auto settings', value: "Changes the auto-kick/banning threshold, there isn't any by default", inline: false},
      { name: prefix+'change subreddit', value: "Changes the subreddit for the memes command. Default is cleanmemes", inline: false},
    )
      message.channel.send(random);
  }
  if (banned === 1){
        return;
      }
  async function main(){
  try {

    if (err) console.log(err);

  const db = mongoclient.db("discordbot");
  if (message){
      let counting = await checkStuff(mongoclient, "counting");
      var countingchannel;
      if (countingchannel === undefined){
        let userid = message.author.id;
        let collection = message.guild.id;
        //let testresult = db.collection(message.guild.id).find({"name" : userid}).count() > 0;

        let testresult = await db.collection(message.guild.id).find( {"name": "counting"}).count();
        let guild = message.guild;
        if (testresult === 0){
          await createListing(mongoclient,
          {
            name: "counting",
            number: 0,
            currentuser: "xxxxxxxxx",
            memes: "cleanmemes"
          })
          if ((message.guild.channels.cache.find(c => c.name.toLowerCase() === "real-counting"))) {
          }
          else{
          guild.channels.create('real-counting')
        }
        }
      }
      if (counting.channel === undefined){
        countingchannel = "real-counting";
      }else{
        countingchannel = counting.channel;
      }
      if (message.channel.name === countingchannel){
        var value;
         let isnumber = Number(message.content.toLowerCase());
         let userid = message.author.id;
         try{
          value = mexp.eval(message.content)
          isnumber = value;
        }catch(e){
          return;
        }
         if (!message){
          return;
         }
         else{
           let result = await mongoclient.db("discordbot").collection(message.guild.id)
           .findOne({ name: "counting"});
           if (result){
             let currentnumopbj = JSON.parse(JSON.stringify(result));
             let currentnumstr = currentnumopbj.number;
             let currentnum = Number(currentnumstr);
             let goodnum = currentnum+1;
             let currentuserid = currentnumopbj.currentuser;
             if (isnumber !== goodnum){
               message.react("❌");
               message.reply("starting over, the next number I am looking for is 1. Reminder: the same person can't type two numbers in a row");
               updateDocumentSet(mongoclient, "counting", {number: 0, currentuser: "xxxxxxxxxx"});
               return;
             }
             else{
               let istrue = (userid.localeCompare(currentuserid));
               if (istrue === 1||istrue === -1){
               message.react("✅");
               //put stuff here that updates stuff
               updateDocumentSet(mongoclient, "counting", {number: goodnum, currentuser: userid});

               }
               else{
               message.reply("You can't put two numbers in a row. Starting over, the next number I am looking for is 1.");
               message.react("❌");
               updateDocumentSet(mongoclient, "counting", {number: 0, currentuser: "xxxxxxxxxx"});
               return;
               }
             }
           }
         }
        }
    }
  if (message){
    let counting = await checkStuff(mongoclient, "counting");

    //signup server stuff
    let serverid = message.guild.id;
    await db.listCollections({name: serverid})
    .next(async function(err, collinfo){
      if (!collinfo){
        const uri = "mongodb+srv://monkey:monkey2008@cluster0.exqqa.mongodb.net/test";
        message.channel.send("this seems to be the first time I have seen this server. To start using my features, you guys can do ~help Please note that it's NOT A DASH, it's a tilde. (you can change this later)")
        await createCollection(serverid);

      }
    })
    //end of signup server
    //channel_restrictions stuff
    let messagechannel = message.channel.id;
    let testresult = await db.collection(message.guild.id).find( {"name": "restrictions"}).count();
    if (testresult === 0){
      await createListing(mongoclient,
      {
        name: "restrictions",
        channel_restrictions:["44148752151452152"]
      })
    }
    //end of channel restrictions

    //start of prefix
    if (counting.prefix === undefined){
      updateDocumentSet(mongoclient, "counting", {prefix: "~"});
    }else{
      prefix = counting.prefix;
      prefixlength = prefix.length;
    }
    if (counting.tts !== undefined){
    if (message.tts === true){
      if (counting.tts === "disabled"){
      message.delete();
      message.channel.send(message.author.tag+" just sent a tts message, while the server creator disabled this feature. I deleted the tts message, and gave the person who tts'd 100 infractions");
      await updateInfractions(mongoclient, message.author.id, 100);
     }
   }
  }
  if (counting.urban === undefined){
    updateDocumentSet(mongoclient, "counting", {urban: "disabled"});
  }else if(counting.urban === "disabled") urbanfunction = "disabled";
  else if (counting.urban === "enabled")  urbanfunction = "enabled";
    signup(mongoclient);
    //////////////////////start of events
    let result5 = await mongoclient.db("discordbot").collection(message.guild.id)
    .findOne({name: "events"});
    if (!result5){
      await createListing(mongoclient,
      {
        name: "events",
        event_0: {},
        event_1: {},
        event_2: {},
        event_3: {},
        event_4: {},
        event_5: {},
        event_6: {},
        event_7: {},
        event_8: {},
        event_9: {},
      })
    }
    //////////////////////end of events
    let delete1 = Date.now()+2592000000;
    updateDocumentSet(mongoclient, "counting", {timedelete: delete1});

  }
  checkAutoKick(mongoclient, message);
  checkAutoBan(mongoclient, message);
  await checkChannelBan(mongoclient);
  if (message.content.startsWith(prefix+"blacklist")){
    let testresult = await db.collection(message.guild.id).find( {"_id": "101"}).count();

            if (testresult === 0){
            await createListing(mongoclient,
           {
             _id: "101",
             badwords:[]
              })
            }
            if (message.content.length<(14+prefixlength)) {
              message.channel.send("you must input a word that is longer than 3 characters to blacklist");
              return;
            }

            if (message.member.hasPermission('ADMINISTRATOR')){

            let proccesedwordx = message.content.toLowerCase().slice(9+prefixlength).trim().split();
            let proccesedword = proccesedwordx.toString();
            if (proccesedword.toLowerCase().includes("blacklist")||proccesedword.toLowerCase().includes("delist")){
              message.channel.send("You can't blacklist commands like delist or blacklist");
              return;
            }
            await updateListing(mongoclient, {badwords: proccesedword});
            await sleep(5000);
            await message.delete();
            return;
            }
              else{
              message.channel.send("You don't have sufficient permissions to do the specified commmand");
               }

        }
  if (message.content.startsWith(prefix+"delist")){
          if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send('message.author.has permission [ADMINISTRATOR]');
            message.channel.send('Authorized');

            let exword = message.content.toLowerCase().slice(7+prefixlength).trim().split();
            let exxword = exword.toString();
            await updateDelListing(mongoclient, {badwords: exxword});
          }
          else{
            message.channel.send('message.author does not have sufficient permissions to change do the specified commmand');
          }
        }
  if (message.content.toLowerCase() === prefix+"disable channel"){
          if (!message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send("you don't have enough perms to run this command");
            return;
          }
        let messagechannel = message.channel.id;
        await updateBannedChannels(mongoclient, {channel_restrictions: messagechannel});
        message.channel.send("done, you will not see me here after this message. If you want to unban me from this channel, type "+prefix+" enable channel in the channel that you want me to be enabled in");
        }
  if (message.content.toLowerCase() === prefix+"enable channel"){
          if (!message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send("you don't have the administrator role to do this commmand");
            return;
          }
        message.channel.send("enabling myself from this channel...");
        let messagechannel = message.channel.id;
        await removeBannedChannel(mongoclient, {channel_restrictions: messagechannel});
        message.channel.send("now all commands work in this channel");
        }
  if (message.content.toLowerCase() === prefix+"show channel restrictions"){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("you don't have the perms to do this command");
      return;
    }
    let result = await mongoclient.db("discordbot").collection(message.guild.id)
    .findOne({ name: "restrictions"});
    if (!result){
  message.channel.send("you don't have any disabled channels.");
  return;
    };
  let bannedchannels = JSON.parse(JSON.stringify(result));
  let channelid = bannedchannels.channel_restrictions;
  let length = bannedchannels.channel_restrictions.length;
  getchannelname(channelid, length);

  }
  if (message.content.startsWith(prefix+"check infractions")){
          if(message.member.hasPermission('ADMINISTRATOR')){
            let myword = message.content.toLowerCase().slice(18+prefixlength).trim().split();
            //let word2 = myword.toString();
            let word2 = message.mentions.users.first().id;
            //message.channel.send(word2)
            await findOneListingByName(mongoclient, word2, message.mentions.users.first().tag);
            //const user = mongoclient.users.get("741793729509064704"); // Getting the user by ID.
            //message.channel.send(user);

          }
          else{
            message.channel.send("you don't have enough permissions to use this command");
          }
        }
  if (message.content.startsWith(prefix+"clear infractions")){
          if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send("message.author has permission [ADMINISTRATOR]");
            message.channel.send('Authorized');
            let myword = message.content.toLowerCase().slice(18+prefixlength).trim().split();
            //let word2 = myword.toString();
            let word2 = message.mentions.users.first().id;
            await clearInfractions(mongoclient, word2 , {infractions: 0})
          }
          else{
            message.channel.send("you don't have enough permissions to use this command");
          }
        }
  if (message.content.toLowerCase().startsWith(prefix+"change prefix")){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("you don't have the permissions to do this");
      return;
    }
  let length1 = message.content.length;
  let lastchar = message.content.slice(length1-1);
  var goodprefix = "~";
    let badprefix = message.content.slice(14+prefixlength);
    if (badprefix.length === 0){
      message.channel.send("the prefix must be one or more characters");
      return;
    }
    if (badprefix.length > 3){
      message.channel.send("the prefix must be 3 or less characters");
        return;
    }
    badprefix = badprefix.toLowerCase();
      if (!/^[a-zA-Z]+$/.test(lastchar)&&!/^[0-9]+$/.test(lastchar)){
        message.channel.send("making: "+ badprefix+"my prefix. You will now run commands like this: "+badprefix+"bal");
        goodprefix = badprefix;
      }else{
        goodprefix = badprefix+" ";
        message.channel.send("the last character of your prefix must be a special character, otherwise it must contain a space at the end. I will add a space, so now when you run commands, do: "+ goodprefix+"bot info")
      }
     message.channel.send("are you sure that you want to make: "+goodprefix+" your prefix? you will type commands like: "+goodprefix+"hi. Type yes if you want to make it the new prefix.");
     message.channel.awaitMessages(m => m.author.id === message.author.id,
     {max: 1, time: 30000}).then(collected => {
     if (collected.first().content.toLowerCase() === 'yes') {
         message.reply('making: '+goodprefix+" the new prefix");
         updateDocumentSet(mongoclient, "counting", {prefix: goodprefix});
         message.reply('done. I will update the new prefix after you send another message.')
     }
     else message.reply('aborted');
     }).catch(() => {
     message.reply('No answer after 30 seconds, operation canceled.');
     });

  }
  if (message.content.toLowerCase() === prefix+"disable tts blocking"){
    if (message.guild.ownerID !== message.author.id){
      message.channel.send("You have to be a server Owner to run this command");
      return;
    }
    message.channel.send("Disabling tts blocking...");
    await updateDocumentSet(mongoclient, "counting", {tts: "enabled"});
    message.channel.send("Done");
  }
  if (message.content.toLowerCase() === prefix+"enable tts blocking"){
    if (message.guild.ownerID !== message.author.id){
      message.channel.send("You have to be a server Owner to run this command");
      return;
    }
    message.channel.send("Enabling tts blocking...");
    await updateDocumentSet(mongoclient, "counting", {tts: "disabled"});
    message.channel.send('Done');
  }
  if (message.content.toLowerCase() === prefix+"show settings"){
    let info = await checkStuff(mongoclient, "counting");
    var tts;
    var conf;
    var kicks;
    var bans;
    var subreddit;
    var countingChannel;
    if (!info.memes) subreddit = "cleanmemes";
    else subreddit = info.memes;
    if (!info.channel) countingChannel = "real-counting"
    else countingChannel = info.channel;
    if (!info.kick) kicks = "default-(none)"
    else kicks = info.kick;
    if (!info.ban) bans = "default-(none)"
    else bans = info.ban
    if(!info.tts||info.tts === "enabled") tts = "disabled";
    else tts = "enabled";
    let random = new Discord.MessageEmbed()
    .setTitle("Server settings")
    .setColor('#18492a')
    .addFields(
      {name: "Censor Bot", value: "Do "+prefix+"show blacklist to see the blacklist", inline: true},
      {name: "TTS blocking", value: tts, inline: true},
      {name: "Urban Dictionary", value: urbanfunction, inline: true},
      {name: "Prefix", value: info.prefix, inline: true},
      {name: "Kicking threshold", value: kicks+" infractions", inline: true},
      {name: "Banning threshold", value: bans+" infractions", inline: true},
      {name: "Current counting channel", value: countingChannel, inline: true},
      {name: "Current subreddit", value: subreddit, inline: true}
    )
    message.channel.send(random)
  }
  if (message.content.toLowerCase() === prefix+"show blacklist"){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("you don't have enough perms");
      return;
    }
    let result = await mongoclient.db("discordbot").collection(message.guild.id)
    .findOne({ _id: "101"});
    if (result){
      let dbwords = JSON.parse(JSON.stringify(result));
        local104();
        async function local104(){

        if (dbwords.badwords.length === 0){
          message.channel.send("There are no words in the blacklist. To start blacklisting words, send: `"+prefix+"blacklist `word`");
          return;
        }else
        message.channel.send("Sent it to you in your DM's");
        let list = dbwords.badwords;
        list = list.join('\n')
      message.member.send(message.guild.name+"'s blacklist: \n"+ list);
  }

  }
  else message.channel.send("There are no words in the blacklist. To start, send: " + prefix + "blacklist `word`.");
  }
  if(message.content.toLowerCase() === prefix+"clear blacklist"){
    if (message.member.hasPermission('ADMINISTRATOR')){
    message.channel.send("Clearing the blacklist...");
    let testresult = await db.collection(message.guild.id).find( {"_id": "101"}).count();
    if (testresult === 1){
      let collectionname = message.guild.id;
  db.collection(collectionname).deleteOne({ _id: "101"});
  message.channel.send("Done! To re-blacklist words, use the blacklist command")
    }
    else{
      message.channel.send("Done! To re-blacklist words, use the blacklist command")
    }
  }
  else{
    message.channel.send("sorry, you don't have enough permissions to do this, please contact your administrator to run this commmand");
  }
  }
  let stop = await findlistingbyname(mongoclient, "101");
  if (stop === "stop"){
    return;
  }
  if (message.content.startsWith(prefix+"reward")){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("you don't have enough perms to do this command");
      return;
    }
    let userid = message.mentions.users.first().id;
    let verifid = message.member.id;
    if (userid === verifid){
      message.channel.send("you can't give yourself points");
      return;
    }
    let exists = await findlisting(mongoclient, userid);
    if (exists === "stop"){
      return;
    }
    message.channel.send("now input the number of points you want to reward that person.");
    message.channel.awaitMessages(m => m.author.id === message.author.id,
    {max: 1, time: 30000}).then(collected => {
    let pointsx = collected.first().content.toLowerCase();
    let points = parseFloat(pointsx);
    if (Number(points).toString() === "NaN"){
      message.channel.send("that wasn't a number");
      return;
    }
    if (points > 100 || points < -100){
      message.channel.send("you can only send less than 100 or more than -100 points at a time");
      return;
    }
    message.channel.send(`gifting: ${points} points to user  ${userid}`);
    const uri = "mongodb+srv://monkey:monkey2008@cluster0.exqqa.mongodb.net/test";
    updatePoints(mongoclient, userid, points);
    message.channel.send("done, but be careful with sending too many points to people, because this might cause inflation, and devalue the points to worthless pieces of junk (not that they already are)");
    })
  }
  if (message.content.toLowerCase() === prefix+"bot info"){
      let servers = await db.stats()
      let servercount = servers.collections;
      let users = servers.objects-(servercount*2)
      let data = servers.storageSize;
      let random = new Discord.MessageEmbed()
        .setTitle('bot info')
        .addFields(
        { name: 'version', value: version, inline: true},
        { name: 'servers I am in', value: client.guilds.cache.size, inline: true},
        { name: 'total users', value: users, inline: true},
        { name: 'storage used', value: data+" bytes", inline: true},
        { name: 'current storage server', value: " cluster0-shard-00-01.exqqa.mongodb.net:27017", inline: true},
        { name: 'current message server', value: " https://pn9c5.sse.codesandbox.io:1024 shard name: cocky_snow_pn9c5", inline: true}
      )
        message.channel.send(random);
  }
  if (banned === 1){
    return;
  }
  if (message.content.startsWith(prefix+"change subreddit")){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("You don't have enough permissions.");
      return;
    }

    let url = await selReddit();
    if (url === "none"){
      message.channel.send("Ok, I will disable this feature!");
      await updateDocumentSet(mongoclient, "counting", {memes: "none"});
      return;
    }
    let urll = "https://api.pushshift.io/reddit/search/submission/?subreddit="+url+"&sort=desc&sort_type=created_utc&size=1000";
    message.channel.send("Validating subreddit...")
    request(urll, async function (error, response, body) {
      if (err) console.error(err)
      try{
        let page = JSON.parse(body)
        let number = Math.floor(Math.random() * Math.floor(page.data.length));
        if (page.data.length === 0){
          message.channel.send("I don't think that subreddit exists, please try again.")
          return;
        }else{
          message.channel.send("Making "+url+" my new subreddit to pull random posts off of.");
          await updateDocumentSet(mongoclient, "counting", {memes: url});
          message.channel.send("Done.")
          return;
        }
  }catch(err){
    message.channel.send(err.toString())
  }
    })
    function selReddit(){
      return new Promise(resolve => {
        let settings = new Discord.MessageEmbed()
        .setTitle("Enter the subreddit's name (without the `r/` )")
        .setColor('#18492a')
        .setDescription("For example, enter:\ndankmemes\ncleanmemes\n No spaces please.")
        .setFooter("As long as the subreddit meets the criteria of at least one post a day, it will be valid. If you want to disable this feature, type `none`")
      message.channel.send(settings);
        message.channel.awaitMessages(m => m.author.id === message.author.id,
        {max: 1, time: 30000}).then(collected => {
          resolve(collected.first().content);
        }).catch(() => {
        message.channel.send('No answer after 30 seconds, operation canceled.');
        });
      });
    }
  }
  if (message.content.toLowerCase() === prefix+"bal"){
    let userid = message.author.id;
      findOneListingByName(mongoclient, userid, message.author.tag);
    }
  if (message.content.startsWith(prefix+"change counting channel")){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("you don't have the perms to do this command");
      return;
    }
      let xchannel = message.content.slice(24+prefixlength);
      let guild = message.guild;
      let x = guild.channels.cache.filter(chx => chx.type === "text").find(r => r.name === xchannel);
      if (x === undefined){
        message.channel.send("that is not a valid text channel.");
        return;
      }
      message.channel.send("that is a text channel");
      updateDocumentSet(mongoclient, "counting", {channel: xchannel});
      //await updateDocumentSet(mongoclient, "counting", {number: goodnum, currentuser: userid});
      message.channel.send("Done, updated counting bot channel to: "+xchannel);
    }
  if (message.content.toLowerCase().startsWith(prefix+"urban")){
    if (urbanfunction === "disabled"){
      return;
    }
      let result = await urban(message.content.slice(6+prefixlength))
      let random = new Discord.MessageEmbed()
      .setTitle("Urban Dictonary search for: "+result.word)
      .setColor("#2c965c")
        .addFields({name: "Definition: ", value: result.definition, inline: true})
        .addFields({name: "Example: ", value: result.example, inline: true})
        .addFields({name: "Author: ", value: result.author, inline: true})
        .addFields({name: "Upvotes: ", value: result.thumbsUp, inline: true})
        .addFields({name: "Downvotes; ", value: result.thumbsDown, inline: true})
        message.channel.send(random);

    }
  if (message.content.toLowerCase() === prefix+"disable urban"){
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    updateDocumentSet(mongoclient, "counting", {urban: "disabled"});
    message.channel.send("Done!")
  }
  if (message.content.toLowerCase() === prefix+"enable urban"){
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    updateDocumentSet(mongoclient, "counting", {urban: "enabled"});
    message.channel.send("Done!")
  }
  if (message.content.toLowerCase() === prefix+"create event"){
    executeevent();
  async function executeevent(){
    vent = {};
    vent.title = await createTitle();
    let desc = await createDesc();
    if (desc.toLowerCase() === "cancel"){
      message.channel.send("Canceled.")
      return;
    }else vent.desc = desc;
    let max = await createMax();
    if (max === "return"){
      return;
    }else vent.max = max;
    let timezone = await createTimeZone()
    if (timezone.toLowerCase() === "cancel"){
      message.channel.send("Canceled.")
      return;
    }else vent.timezone = timezone;
    let date = await createTime();
    if (date === "cancel"){
      message.channel.send("canceled.");
      return;
    }else{
      vent.date = date;
    }
    let done = await finishCreate();
    if (done === "yes"){
      message.channel.send("Ok, I am publishing it right now...");
      if ((message.guild.channels.cache.find(c => c.name.toLowerCase() === "events"))) {
        message.channel.send("channel already exists! \n skipping this part...")
      }
      else{
      await message.guild.channels.create('events')
    }
      message.channel.send("done.");
      let random = new Discord.MessageEmbed()
      .setTitle(vent.title)
      .setColor('#18492a')
      .setDescription(vent.desc)
      .addFields(
        {name: "Time: ", value: vent.date},
        {name: ":white_check_mark: Accepted (_/"+vent.max+")", value: "-", inline: true},
        {name: ":x: Declined", value: "-", inline: true},
      )
      .setFooter("Created by "+ message.author.tag+" at "+Date.now())
  vent.message = await message.guild.channels.cache.find(i => i.name === 'events').send(random);
  vent.delete = 7;
  updateDocumentSet(mongoclient, "events", {event_0: vent})
  vent.message.react("✅");
  vent.message.react("❌");
    }else{
      message.channnel.send("Ok, I won't publish it.");
      return;
    }

    console.log(vent);
  }
  function createTitle(){
    return new Promise(resolve => {
      let random = new Discord.MessageEmbed()
      .setTitle("Set the event's title")
      .setColor('#18492a')
      .setDescription("There is no character limit, but it may look ugly if you put more characters.")
    message.channel.send(random);
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
        resolve(collected.first().content);
      }).catch(() => {
      message.channel.send('No answer after 30 seconds, operation canceled.');
      });
    });
  }
  function createDesc(){
    return new Promise(resolve => {
      let random = new Discord.MessageEmbed()
      .setTitle("Set the event's description")
      .setColor('#18492a')
      .setDescription("Type `None` if you want to skip this step")
      .setFooter("Type `Cancel` if you want to cancel the entire operation")
    message.channel.send(random);
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
        resolve(collected.first().content);
      }).catch(() => {
      message.channel.send('No answer after 30 seconds, operation canceled.');
      });
    });
  }
  function createMax(){
    return new Promise(resolve => {
      let random = new Discord.MessageEmbed()
      .setTitle("Set the maximum of people that will be allowed in this event.")
      .setColor('#18492a')
      .setDescription("Type `None` for no limit")
      .setFooter("Type `Cancel` if you want to cancel the entire operation")
    message.channel.send(random);
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
        if (collected.first().content.toLowerCase() === "none"){
          resolve("1000000000");
          return;
        }
        if (Number(collected.first().content).toString() === "NaN"){
          message.channel.send("That wasn't a number.");
          resolve("return");
        }
        resolve(collected.first().content);
      }).catch(() => {
      message.channel.send('No answer after 30 seconds, operation canceled.');
      });
    });
  }
  function createTimeZone(){
    return new Promise(resolve => {
      let random = new Discord.MessageEmbed()
      .setTitle("Set the time zone")
      .setColor('#18492a')
      .setDescription("Type your time zone's number")
      .setFooter("Type `Cancel` if you want to cancel the entire operation")
      .addFields(
        { name: "North America", value: "**1** Pacific Time\n**2** Mountain Time\n**3** Central Time\n**4** Eastern Time\n**5** Atlantic Time\n**6** Newfoundland Time\n**7** Arizona Time\n**8** Hawai\n**9** Alaska Time", inline: true},
        { name: "South America", value: "**10** Acre (UTC-5)\n**11** Amazonas (UTC-4)\n**12** Sao Pualo (UTC-3)\n**13** Fenando de Noronha\n(UTC-2)\n**14** Continental Chile", inline: true},
        { name: "Central America", value: "**15** Central Standard Time\n**16** Eastern Standard Time\n**17** Atlantic Standard Time", inline: true},
        { name: "Oceania", value: "**18** South Australia\n **19** Queensland\n **20** Northern Territory\n **21** Western Australia\n **22** New South Wales / \nVictoria \n**23** New Zealand \n**24** Chamorro Standard Time", inline: true},
        { name: "Europe", value: "**25** Western Europe (UK) \n**26** Central Europe \n**27** Eastern Europe \n**28** Moscow Standard Time \n**29** Turkey Time\n **30** UTC", inline: true},
        { name: "Middle East", value: "**31** Arabia Standard Time \n**32** Iran Standard Time\n**33** Gulf Standard Time\n**34** Israel Standard Time\n**35** Pakistan Standard Time", inline: true},
        { name: "Asia", value: "**36** Korea \n**37** Japan\n**38** Bangladesh\n**39** Kazakhstan\n**40** Hong Kong\n**41** India\n**42** Nepal\n**43** Myanmar Time", inline: true},
        { name: "Southeast Asia", value: "**44** Singapore\n**45** Philippines\n**46** Indochina Time", inline: true},
        { name: "Africa", value: "**47** South Africa Standard\nTime\n**48** Tunisia", inline: true},
      )
    message.channel.send(random);
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
        if (Number(collected.first().content).toString() === "NaN"){
          message.channel.send("That wasn't a valid option");
          resolve("cancel");
          return;
        }
        if (Number(collected.first().content) > 48 || Number(collected.first().content)<1){
          message.channel.send("that wasn't a valid option.");
          resolve("cancel");
          return;
        }
        resolve(collected.first().content);
      }).catch(() => {
      message.channel.send('No answer after 30 seconds, operation canceled.');
      });
    });
  }
  function createTime(){
    return new Promise(resolve => {
      let random = new Discord.MessageEmbed()
      .setTitle("Set the event's time")
      .setColor('#18492a')
      .setFooter("Type `Cancel` if you want to cancel the entire operation")
      .addFields(
        {name: "Here are some options of how you can set the time:", value: "Today, Tomorrow, Yesterday, \n17 August 2013-19 \nAugust 2013\nThis Friday at 13:00\n2 weeks from now\nSat Aug 17 2013 18:40:39 GMT+0900 (JST)2014-11-30T08:15:30-05:30"}
      )
    message.channel.send(random);
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
        if (collected.first().content.toLowerCase() === "cancel"){
          resolve("cancel");
          return;
        }
        let tz = Number(vent.timezone);
        console.log(tz);
        //let tz = 1;
        var gmt;
        if (tz === 1) gmt = "GMT-8";
        else if (tz === 2) gmt = "GMT-0700"
        else if (tz === 3) gmt = "GMT-0600"
        else if (tz === 4) gmt = "GMT-0500"
        else if (tz === 5) gmt = "GMT-0400"
        else if (tz === 6) gmt = "GMT-0330"
        else if (tz === 7) gmt = "GMT-0700"
        else if (tz === 8) gmt = "GMT-1000"
        else if (tz === 9) gmt = "GMT-0900"
        else if (tz === 10) gmt = "GMT-0500"
        else if (tz === 11) gmt = "GMT-0400"
        else if (tz === 12) gmt = "GMT-0300"
        else if (tz === 13) gmt = "GMT-0200"
        else if (tz === 14) gmt = "GMT-0400"
        else if (tz === 15) gmt = "GMT-0600"
        else if (tz === 16) gmt = "GMT-0500"
        else if (tz === 17) gmt = "GMT-0400"
        else if (tz === 18) gmt = "GMT+1030"
        else if (tz === 19) gmt = "GMT+1000"
        else if (tz === 20) gmt = "GMT+0930"
        else if (tz === 21) gmt = "GMT+0800"
        else if (tz === 22) gmt = "GMT+10100"
        else if (tz === 23) gmt = "GMT+1300"
        else if (tz === 24) gmt = "GMT+1000"
        else if (tz === 25) gmt = "GMT+0000"
        else if (tz === 26) gmt = "GMT+0100"
        else if (tz === 27) gmt = "GMT+0200"
        else if (tz === 28) gmt = "GMT+0300"
        else if (tz === 29) gmt = "GMT+0300"
        else if (tz === 30) gmt = "GMT+00000"
        else if (tz === 31) gmt = "GMT+0300"
        else if (tz === 32) gmt = "GMT+0330"
        else if (tz === 33) gmt = "GMT+0400"
        else if (tz === 34) gmt = "GMT+0200"
        else if (tz === 35) gmt = "GMT+0500"
        else if (tz === 36) gmt = "GMT+0900"
        else if (tz === 37) gmt = "GMT+0900"
        else if (tz === 38) gmt = "GMT+0600"
        else if (tz === 39) gmt = "GMT+0600"
        else if (tz === 40) gmt = "GMT+0800"
        else if (tz === 41) gmt = "GMT+0530"
        else if (tz === 42) gmt = "GMT+0545"
        else if (tz === 43) gmt = "GMT+0630"
        else if (tz === 44) gmt = "GMT+0800"
        else if (tz === 45) gmt = "GMT+0800"
        else if (tz === 46) gmt = "GMT+0700"
        else if (tz === 47) gmt = "GMT+0200"
        else if (tz === 48) gmt = "GMT+0100"
        let x = collected.first().content+" "+gmt;
        console.log(x);
        let date = chrono.parseDate(x);
        resolve(date);
      }).catch((err) => {
      message.channel.send('No answer after 30 seconds, operation canceled.');
      console.log(err);
      });
    });
  }
  function finishCreate(){
    return new Promise(resolve => {
      message.channel.send("here is what your event will look like: ")
      let random = new Discord.MessageEmbed()
      .setTitle(vent.title)
      .setColor('#18492a')
      .setDescription(vent.desc)
      .addFields(
        {name: "Time: ", value: vent.date},
        {name: ":white_check_mark: Accepted (_/"+vent.max+")", value: "-", inline: true},
        {name: ":x: Declined", value: "-", inline: true},
      )
      .setFooter("Created by "+ message.author.tag+" at "+Date.now())
    message.channel.send(random);
    message.channel.send("would you like to publish it? (yes/no)")
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
        resolve(collected.first().content);
      }).catch(() => {
      message.channel.send('No answer after 30 seconds, operation canceled.');
      });
    });
  }
  }
  if (message.content.startsWith(prefix+"suggest")){
    let suggestion = message.content.slice(prefixlength+7)
    if ((message.guild.channels.cache.find(c => c.name.toLowerCase() === "suggestions"))) {
    }
    else{
    await message.guild.channels.create('suggestions')
    }
    let date = chrono.parseDate("now");
    let random = new Discord.MessageEmbed()
    .setTitle("Suggestion From: "+message.author.tag)
    .setColor('#18492a')
    .setDescription("Sugested at: "+date)
    .addFields(
      {name: "Suggestion:", value: suggestion, inline: true},
    )
    .setFooter("Created by "+ message.author.tag+" at "+Date.now())
  let er = await message.guild.channels.cache.find(i => i.name === 'suggestions').send(random);
  er.react("⬆️")
  er.react("⬇️")
  message.delete();
  }
  if (message.content.toLowerCase() === prefix+"meme"){
    let counting = await checkStuff(mongoclient, "counting");
    if (!counting.memes){
      subreddit = "cleanmemes";
      await updateDocumentSet(mongoclient, "counting", {memes: "cleanmemes"})
    }else subreddit = counting.memes
    if (subreddit === "none") return;
    const millis = Date.now();
    let currentDate = Math.floor(millis / 1000)
    let dateAgo = (Math.floor(currentDate)-2592000);
    let date1 = Math.floor(Math.random() * (currentDate - dateAgo) + dateAgo)
    let date2 = Math.floor(Math.random() * (currentDate - dateAgo) + dateAgo)
    if (date1>date2){
      var date3 = date2;
      var date4 = date1;
    }else if (date1<date2){
      var date3 = date1;
      var date4 = date2;
    }
    let urll = "https://api.pushshift.io/reddit/search/submission/?subreddit="+subreddit+"&sort=desc&sort_type=created_utc&after="+date3.toString()+"&before="+date4.toString()+"&size=1000"
  try{
    request(urll, function (error, response, body) {
      for (var i = 0; i<3; i++){
      try{
        let page = JSON.parse(body)
        let number = Math.floor(Math.random() * Math.floor(page.data.length));
        if (page.data.length === 0){
          message.channel.send("Something went wrong. The most likely thing that happened was that your admins set the subreddit to something that doesn't exist! You could also be spamming.")
          break;
        }
        let random = new Discord.MessageEmbed()
          .setColor('#18492a')
          .setTitle(page.data[number].title)
          .setURL(page.data[number].full_link)
          if (page.data[number].selftext === "[deleted]"){
            continue;
          }
          if (page.data[number].selftext !== "[deleted]"){
          random.setDescription(page.data[number].selftext)
        }
         if (page.data[number].url.includes(".jpeg")||page.data[number].url.includes(".jpg")||page.data[number].url.includes(".png")){
          random.setImage(page.data[number].url)
        }else if (page.data[number].thumbnail.includes(".jpeg")||page.data[number].thumbnail.includes(".jpg")||page.data[number].thumbnail.includes(".png")){
          random.setImage(page.data[number].thumbnail)
        }
        var myDate = new Date(Number(page.data[number].retrieved_on)*1000)
        let madeDate = myDate.toGMTString()
        random.setFooter("Posted at: "+madeDate)
          message.channel.send(random);
          break;
        }catch{
        }
      }
    })
  }catch{
    message.channel.send("Something went wrong. The most likely thing that happened was that your admins set the subreddit to something that doesn't exist!")
  }

  }
  if (message.content.toLowerCase().startsWith(prefix+"change auto settings")){
    if (!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send("You don't have enough permissions to run this command");
      return;
    }
    var mode;
    let option = await selOption();
    if (option === "restart"){
      message.channel.send("That isn't an option, please restart.");
      return;
    }else if (option === "1") mode = "kick"
    else if (option === "2") mode = "ban"
    let number = await selInfractions();
    if (number === "restart"){
      message.channel.send("That wasn't a valid number. Please restart the process.");
      return;
    }else if (number === "none") number = "none"
    if (mode === "kick"){
      updateDocumentSet(mongoclient, "counting", {kick: number}, message);
    }else if (mode === "ban"){
      updateDocumentSet(mongoclient, "counting", {ban: number}, message);
    }
    message.channel.send("Ok, I will now automatically "+mode+" a user when they reach "+ number+" infractions.")
    function selOption(){
      return new Promise(resolve => {
        let settings = new Discord.MessageEmbed()
        .setTitle("Select which option you want to change.")
        .setColor('#18492a')
        .setDescription("1. Auto kicks\n2. Auto bans")
        .setFooter("Input 1 or 2")
      message.channel.send(settings);
        message.channel.awaitMessages(m => m.author.id === message.author.id,
        {max: 1, time: 30000}).then(collected => {
          if (collected.first().content === "1"||collected.first().content === "2"){
          resolve(collected.first().content);
        }else resolve("restart")
        }).catch(() => {
        message.channel.send('No answer after 30 seconds, operation canceled.');
        });
      });
    }
    function selInfractions(){
      return new Promise(resolve => {
        let embed = new Discord.MessageEmbed()
        .setTitle("Set the threshold of infractions for banning/kicking a user.")
        .setColor('#18492a')
        .setDescription("Enter a number between 2 and 1000")
        .setFooter("If you want to set to never ban/kick based off of infractions, enter 'none'.")
      message.channel.send(embed);
        message.channel.awaitMessages(m => m.author.id === message.author.id,
        {max: 1, time: 30000}).then(collected => {
          if (collected.first().content.toLowerCase() === "none"){
            resolve("none")
          }else if (Number(collected.first().content).toString().toLowerCase() === "nan"){
            resolve("restart");
          }else if (Number(collected.first().content)>1000){
            resolve("restart")
          }else if (Number(collected.first().content)<2){
            resolve("restart")
          }else{
          resolve(Number(collected.first().content));
          }
        }).catch(() => {
        message.channel.send('No answer after 30 seconds, operation canceled.');
        });
      });
    }
  }
  async function updateDocumentSet(mongoclient, name, updatedlisting){
              let result = await mongoclient.db("discordbot").collection(message.guild.id)
              .updateOne({ name: name}, {$set: updatedlisting});
  }
  async function createCollection(collectionname){
      //const uri = "mongodb+srv://monkey:monkey2008@cluster0.exqqa.mongodb.net/test";
      const db = mongoclient.db("discordbot");
      db.createCollection(collectionname, function(err, result){
        console.log ("Server Created!");

      })
    }
  async function checkChannelBan(mongoclient){
      let messagechannel = message.channel.id;
      let result = await mongoclient.db("discordbot").collection(message.guild.id)
      .findOne({ name: "restrictions"});
      if (result){
        let bannedchannels = JSON.parse(JSON.stringify(result));
        //message.channel.send(bannedchannels.channel_restrictions);
          const uri = "mongodb+srv://monkey:monkey2008@cluster0.exqqa.mongodb.net/test";
          for (var k = 0; k<100; k++){
            if (messagechannel === bannedchannels.channel_restrictions[k]){
              banned = 1;
              return;
            }
            else{
              banned = 0;
            }
          }
      }
    }
  async function findOneListingByName(mongoclient, nameOfListing, tag){
      let result = await mongoclient.db("discordbot").collection(message.guild.id)
      .findOne({name: nameOfListing});
      if (result){
        let dbwords = JSON.parse(JSON.stringify(result));
        let random = new Discord.MessageEmbed()
        .setTitle(`${tag}'s stats'`)
          .addFields(
          { name: 'id: ', value: nameOfListing, inline: false },
        	{ name: 'social credit points: ', value: dbwords.points, inline: false },
      		{ name: 'infractions:', value: dbwords.infractions, inline: false },
      	)
          message.channel.send(random);
      }
      else{
        message.channel.send("either you did not specify a user, or that user does not exist, or that person has not signed up yet");
      }
    }
  async function updatePoints(mongoclient, nameOfListing, addpoints){

      let collection = message.guild.id;
      let result = await mongoclient.db("discordbot").collection(message.guild.id)
      .findOne({ name: nameOfListing});
      if (result){
        let lookup = JSON.parse(JSON.stringify(result));
        let numofpoints = lookup.points;
        let x = Number(numofpoints);
        let updatepoints = x + addpoints;

        result = await mongoclient.db("discordbot").collection(message.guild.id)
        .updateOne({ name: nameOfListing}, {$set: {points: updatepoints}})
      }

    }
  async function clearInfractions(mongoclient, name, updatedlisting){
      let result = await mongoclient.db("discordbot").collection(message.guild.id)
      .updateOne({ name: name}, {$set: updatedlisting});
      message.channel.send("done");
    }
  async function updateListing(mongoclient, updatedlisting){
       let result = await mongoclient.db("discordbot").collection(message.guild.id)
       .updateOne({ _id: "101"}, {$push: updatedlisting});
       message.channel.send("done");
     }
  async function updateBannedChannels(mongoclient, updatedlisting){
       let result = await mongoclient.db("discordbot").collection(message.guild.id)
       .updateOne({ name: "restrictions"}, {$push: updatedlisting});
     }
  async function updateDelListing(mongoclient, updatedlisting){
       let result = await mongoclient.db("discordbot").collection(message.guild.id)
       .updateOne({ _id: "101"}, {$pull: updatedlisting});
       message.channel.send("done");
     }
  async function removeBannedChannel(mongoclient, updatedlisting){
       let result = await mongoclient.db("discordbot").collection(message.guild.id)
       .updateOne({ name: "restrictions"}, {$pull: updatedlisting});
       message.channel.send("done");
     }
  async function listDatabases(mongoclient){
        let databasesList = await mongoclient.db().admin().listDatabases();
        message.channel.send("Databases: ");
        databasesList.databases.forEach(db => message.channel.send(` - ${db.name}`))
      }
  async function createListing(mongoclient, newWord){

        let result = await mongoclient.db("discordbot").collection(message.guild.id).insertOne(newWord);

      }
  async function findlistingbyname(mongoclient, nameOfListing){
                let result = await mongoclient.db("discordbot").collection(message.guild.id)
                .findOne({ _id: "101"});

                if (result){
                  let dbwords = JSON.parse(JSON.stringify(result));
                    for (var k = 0; k<dbwords.badwords.length; k++){
                      let noSpace = message.content.toLowerCase().replace(/\s+/g, '');
                      let dbSpace = dbwords.badwords[k].toLowerCase().replace(/\s+/g, '');
                      if (noSpace.includes(dbwords.badwords[k])||message.content.toLowerCase().includes(dbwords.badwords[k])||noSpace.includes(dbSpace)){
                        message.delete();
                        const db = mongoclient.db("discordbot");
                        let userid = message.author.id;
                      message.channel.send('Message deleted and updated your infractions for the admins to see.');
                      let random = Math.floor(Math.random()*10);
                          await updateInfractions(mongoclient, userid, 1);
                          return "stop";
                      }
                    }

                } else {
                }

                let dbwords = result;
      }
  async function updateInfractions(mongoclient, nameOfListing, addpoints){
              let userid = message.author.id;
              let collection = message.guild.id;
              let result = await mongoclient.db("discordbot").collection(message.guild.id)
              .findOne({ name: userid});
              if (result){
                let lookup = JSON.parse(JSON.stringify(result));
                let numofpoints = lookup.infractions;
                let x = Number(numofpoints);
                let updatepoints = x + addpoints;

                result = await mongoclient.db("discordbot").collection(message.guild.id)
                .updateOne({ name: nameOfListing}, {$set: {infractions: updatepoints}})
              }
          }
  async function findlisting(mongoclient, nameOfListing){
        let result = await mongoclient.db("discordbot").collection(message.guild.id)
        .findOne({name: nameOfListing});
        if (result){
          let authorpoints = JSON.parse(JSON.stringify(result));
          if (message.author.bot) return;
          let realpoints = authorpoints.points;
        }
        else {
          message.channel.send("the person you specified either doesn't have an acount yet, or you entered the id wrong.");
          return "stop"
        }
      }
  async function signup(mongoclient){
        let userid = message.author.id;
        let collection = message.guild.id;
        const db = mongoclient.db("discordbot");
        let testresult = await db.collection(message.guild.id).find( {"name": userid}).count();

        if (testresult === 0){
          await createListing(mongoclient,
          {
            name: userid,
            points: 0,
            infractions: 0
          })

          //message.channel.send("done.");
        }
        else {
          //message.channel.send("you cannot have two acounts, sorry");
        }
      }
  async function checkStuff(mongoclient, name){
    let result = await mongoclient.db("discordbot").collection(message.guild.id)
    .findOne({name: name});
    if (result){
      return result;
    }
  }
  async function getchannelname(channelsx, length){
    var disablechannels = [];
    let guild = message.guild;
    for (var y = 0; y<guild.channels.cache.filter(chx => chx.type === "text").size; y++){
    var chx = guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === y);
  if (chx === undefined){
    break;
  }
  if (channelsx.includes(chx.id)){
  var channel = await client.channels.fetch(chx.id);
  //let achannel = await message.channel.send(channel.name);
  await disablechannels.push(channel.name.toString());
  }
    }
    if (disablechannels.length === 0){
      message.channel.send("you don't have any disabled channels, to start disabling channels, do "+prefix +"disable channel in the channel you want to disable me in");
      return;
    }
    let list = disablechannels.toString();
    message.channel.send(list)
  }
  async function checkAutoKick(mongoclient, message){
    let serverstuff = await checkStuff(mongoclient, "counting", message);
    var kickInfrac;
    var userprofile;
    if (!serverstuff.kick) return;
    if (serverstuff.kick === "none") return;
    kickInfrac = Number(serverstuff.kick);
    let result = await mongoclient.db("discordbot").collection(message.guild.id)
    .findOne({name: message.author.id});
    if (result){
      userprofile = JSON.parse(JSON.stringify(result));
     }
    //let userProfile = await checkStuff(mongoclient, message.author.id, message);
    if (Number(userprofile.infractions)>kickInfrac){
      message.channel.send("kicking this person because they reached the limit of infractions set by their admin.");
      await kick(message);
      await mongoclient.db("discordbot").collection(message.guild.id)
      .deleteOne({name: message.author.id});
    }
  }
  async function checkAutoBan(mongoclient, message){
    let serverstuff = await checkStuff(mongoclient, "counting", message);
    var banInfrac;
    var userprofile;
    if (!serverstuff.ban) return;
    if (serverstuff.ban === "none") return;
    banInfrac = Number(serverstuff.ban);
    let result = await mongoclient.db("discordbot").collection(message.guild.id)
    .findOne({name: message.author.id});
    if (result){
      userprofile = JSON.parse(JSON.stringify(result));
     }
    //let userProfile = await checkStuff(mongoclient, message.author.id, message);
    if (Number(userprofile.infractions)>banInfrac){
      message.channel.send("banning this person because they reached the limit of infractions set by their admin.");
      await ban(message);
      await mongoclient.db("discordbot").collection(message.guild.id)
      .deleteOne({name: message.author.id});
    }
  }
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  async function findimage(searchquery){
          let testx = await imageclient.search(searchquery, imageoptions);
          googlelink = testx[0].thumbnail;
          message.channel.send(googlelink);
  }
  async function buffer(rotations){
        let msg = await message.channel.send("|");
      for(var x = 0; x<rotations; x++){
        await sleep(1250);
        await msg.edit("/");
        await sleep(1250);
        await msg.edit("_");
        await sleep(1250);
        await msg.edit('\\');
        await sleep(1250);
        await msg.edit("|");
      }
      }
  async function fallen(){
        message.channel.send("calling 911 for you   *`we arent actually calling 911, this is just a joke, pls don't sue me, I'm a bankrupt college kid who just made this for fun`*")
          await buffer(5);
          message.channel.send("https://youtu.be/BeG5FqTpl9U?t=35");
      }
  async function friends(){
            message.channel.send("attempting to give you friends");
            let msg = await message.channel.send("⚀");
            for (var qw = 0; qw<2; qw++){
              await msg.edit("⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
            }
            message.channel.send("sorry, that failed. That's probably becuase aren't a likable person, and your social life is trash.");
            message.channel.send("finding a quote to make you feel better");
            msg = await message.channel.send("⚀");
            for (var qw = 0; qw<2; qw++){
              await msg.edit("⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);
              await msg.edit("⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀⚀");
              await sleep(1250);

            }
            message.channel.send("found one:");
            message.channel.send(roasttest[Math.floor(Math.random()*7)]);
      }
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function kick(message){
  message.member.kick({reason: "Too many infractions"}).catch(err=>{
    message.channel.send(err.toString())
  })
  }
  async function ban(message){
    message.member.ban({reason: "Too many infractions"}).catch(err=>{
      message.channel.send(err.toString())
    })
  }
  //start of music bot
  const responseObject = {
    "hi": "hi boi",
    "bye": "bye boi",
    "light theme": "https://media.discordapp.net/attachments/722953585217896560/754876761833209916/image0.gif",
    "help meth":"don't do drugs kids",
    "no u": "https://i.imgur.com/8GPN9I3.jpg"
  };
  if(responseObject[message.content.toLowerCase().slice(prefixlength)]&&message.content.startsWith(prefix)){
      message.channel.send(responseObject[message.content.toLowerCase().slice(prefixlength)]);
    }
  if (message.content.toLowerCase().startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
try{
    if (cmd) cmd.execute(client, message, args);
  }catch(err){
    //message.channel.send("There was an error. To report this, use the error code `0x92EC39Q`")
    console.log(err)
  }
}
  if (message.content.toLowerCase().startsWith(prefix+"kick")){
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send("you don't have enough permissions to kick people haha lol sucks to be you");
      return;
    }
    if (message.mentions.members.first()) {
      message.channel.send("Now type in a reason that you want to kick this person, (it can be anything)");

      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
      let reason = collected.first().content;
      message.mentions.members.first().kick({reason: reason}).then((member) => {
      message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: with the reason: " + reason);

      }).catch(() => {
      message.reply("oops, something happened, I probably don't have the permissions to kick "+ message.mentions.members.first().displayName+"if you really want to kick this person, consider removing their admin role");
      });

         }).catch(() => {
             message.channel.send("I do not have permissions to do this");
         });
     }else message.channel.send("you have to mention someone to kick!");
  }
  if (message.content.toLowerCase().startsWith(prefix+"translate")){
    let countrycode = message.content.toLowerCase().slice(10+prefixlength,12+prefixlength);
    if (countrycode === "zh"){
      countrycode = "zh-CN";
    }
    if (countrycode === ""){
      message.channel.send("to translate something from english to another language, do "+prefix+"translate [language code ie. RU for russian] [stuff you want to translate] I have a full list of country codes in "+prefix+"help translate\nto translate something from a language to english, do "+prefix+"translate [stuff here]");
      return;
    }
    let translatefrom = message.content.slice(13+prefixlength);
    translate(translatefrom, {from: 'en', to: countrycode}).then(res => {
      message.channel.send(res.text);
  }).catch(err => {
    //message.channel.send(message.content.slice(11));
    translate(message.content.slice(10+prefixlength), {to: 'en'}).then(res => {
      message.channel.send(res.text);
    }).catch(err => {
      message.channel.send("that language is not supported, for more help, do "+prefix+"help language")
  });
  });

  }
  if (message.content.toLowerCase().startsWith(prefix+"ban")){
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send("you don't have enough permissions to kick people haha lol sucks to be you");
      return;
    }
    if (message.mentions.members.first()) {
      message.channel.send("Now type in a reason that you want to ban this person, (it can be anything)");

      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
      let reason = collected.first().content;
      message.mentions.members.first().ban({reason: reason}).then((member) => {
      message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: with the reason: " + reason);

      }).catch(() => {
        message.reply("oops, something happened, I probably don't have the permissions to ban "+ message.mentions.members.first().displayName+"if you really want to ban this person, you should first remove their admin role.");
      });

         }).catch(() => {
             message.channel.send("I do not have permissions to do this");
         });
     }else message.channel.send("you have to mention someone to ban!");
  }
  if (message.content.toLowerCase() === prefix+"gimme nitro"){
    nitro();
    async function nitro(){
      message.channel.send("withdrawing 9.99 from ur bank acount...\n please be patient as this will take some time to lg in to ur bank acount\n approximatly 10 seconds remaining");
      await sleep(5000);
      message.channel.send("aproximatly 5 seconds remaining");
      await sleep(4000);
      message.channel.send("one second remaining");
      await sleep(1000);
      message.channel.send("https://media.discordapp.net/attachments/788162596099850241/796831121970167858/nitro.png");
    }
    }
  if (message.content.toLowerCase() === prefix+"gimme friends"){
    friends();
  }
  if (message.content.toLowerCase() === prefix+"spam"){
    var spam = [];
      for (var x=0; x<5; x++){
        spam.push('spam spam spam spam spam spam spam spam')
      }
      message.channel.send(spam)
    }
  if (message.content.toLowerCase() === prefix+"rick roll"){
      message.delete();
      message.channel.send(rickroll[Math.floor(Math.random()*12)]);
    }
  if (message.content.toLowerCase().includes(prefix+"owoify")){
    let owo = message.content.toLowerCase().slice(7+prefixlength);
    message.channel.send(owoify(owo));
  }
  if (message.content.startsWith(prefix+"solve")){
    if (message.content.toLowerCase().includes("^")){
      message.channel.send("sorry, I currently don't know how to solve equations with an exponent.");
      return;
    }
    message.channel.send("Warning! This solver is depreciated, and might be removed in a future release!\n To use the new solver, use `"+prefix+"evaluate solve (*equation*, *variable to solve for*)`")
    let equation = message.content.slice(6+prefixlength);
    let steps  = solver.solveEquation(equation);
    let random = new Discord.MessageEmbed()
      .setTitle('Here are the steps you need to do to solve your equation')
    steps.forEach(step => {
        random.addFields({name: "Before this change: ", value: step.oldEquation.print(), inline: true})
        random.addFields({name: "Type of change: ", value: step.changeType, inline: true})
        random.addFields({name: "After this change: ", value: step.newEquation.print(), inline: true})
  })
  message.channel.send(random)
  //*/
  }
  if (message.content.startsWith(prefix+"evaluate")){
    let expression = message.content.slice(9+prefixlength);
    if (expression.includes("lcm")){
      message.channel.send("enter the first number");
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
      let time = Number(collected.first().content);
      if (time.toString() === "NaN"){
      message.channel.send("You must enter a number");
      return;
  }
      let a = time;
  message.channel.send("ok, now enter in the second number");
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
  time = Number(collected.first().content);
  if (time.toString() === "NaN"){
  message.channel.send("You must enter a number");
  return;
  }
  let b = time;
  let sin = "lcm("+a+","+b+")";
  var e = nerdamer(sin).evaluate();
  message.channel.send(e.text());
  }).catch(() => {
    message.reply('No response after 30 seconds, operation canceled.')
  })
      }).catch(() => {
      message.reply('No answer after 30 seconds, operation canceled.');
      });
      return;
    }
    if (expression.includes("gcf")||expression.includes("gcd")){
      message.channel.send("enter the first number");
      message.channel.awaitMessages(m => m.author.id === message.author.id,
      {max: 1, time: 30000}).then(collected => {
      let time = Number(collected.first().content);
      if (time.toString() === "NaN"){
      message.channel.send("You must enter a number");
      return;
  }
      let a = time;
  message.channel.send("ok, now enter in the second number");
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
  time = Number(collected.first().content);
  if (time.toString() === "NaN"){
  message.channel.send("You must enter a number");
  return;
  }
  let b = time;
  let sin = "gcd("+a+","+b+")";
  var e = nerdamer(sin).evaluate();
  message.channel.send(e.text());
  }).catch(() => {
    message.reply('No response after 30 seconds, operation canceled.')
  })
      }).catch(() => {
      message.reply('No answer after 30 seconds, operation canceled.');
      });
      return;
    }
    if (!expression.includes("(")||!expression.includes(")")){
      message.channel.send("make sure that you included paratheses");
      return;
    }
    var count = 0;
    try{
    var e = nerdamer(expression).evaluate()
    message.channel.send(e.text())
  }catch(err){
    message.channel.send(err.toString())
    };
  }
  if (message.content.toLowerCase().startsWith(prefix+"help")){
    if (message.content.toLowerCase() === prefix+"help fun"){

      let random = new Discord.MessageEmbed()
        .setTitle('help fun menu')
        .addFields(
        { name: prefix+'hi', value: 'displays "hi boi"', inline: true },
      	{ name: prefix+'bye', value: 'returns "bye boi"', inline: true },
    		{ name: prefix+'gimme friends', value: 'attempts to give you friends', inline: true },
    		{ name: prefix+'spam', value: 'spams.', inline: true },
        { name: prefix+'rick roll', value: 'idk, what do you think it does?', inline: true },
        { name: prefix+'light theme', value: 'tortures light theme users', inline: true },
        { name: prefix+'gimme nitro', value: 'attemts to give you nitro', inline: true },
        { name: prefix+'owoify', value: prefix+'owoify [sentence], owoifies a sentence', inline: true },
        { name: prefix+'urban', value: 'searches the urban dictionary for words (this is currently `'+urbanfunction +'` by your admin).', inline: true},
        { name: prefix+'meme', value: 'randomly gets a post from the set subreddit.', inline: true},
    	)
        message.channel.send(random);
    }
    if (message.content.toLowerCase() === prefix+"help currency"){
      let random = new Discord.MessageEmbed()
        .setTitle('help currency menu')
        .addFields(
        { name: prefix+'bal', value: 'shows your current balance', inline: true },
    	)
        message.channel.send(random);
    }
    if (message.content.toLowerCase() === prefix+"help i've"){
      let random = new Discord.MessageEmbed()
        .setTitle('help menu')
        .addFields(
        { name: prefix+'fallen', value: "help I've fallen", inline: true },
    	)
        message.channel.send(random);
    }
    if (message.content.toLowerCase() === prefix+"help i've fallen"){
      fallen();
    }
    if (message.content.toLowerCase() === prefix+"help music"){
          const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
          const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

          message.channel.send({
              embed: {
                  color: 'ORANGE',
                  author: { name: 'Help pannel' },
                  fields: [
                      { name: 'Music', value: music },
                      { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                  ],
                  timestamp: new Date(),
                  description: `To use filters, ${prefix}filter (the filter). Example : ${prefix}filter 8D.`,
              },
          });

    }
    if (message.content.toLowerCase() === prefix+"help crypto"){
      let random = new Discord.MessageEmbed()
        .setTitle('help crypto menu')
        .addFields(
        { name: prefix+'coin [crypto currency]', value: 'shows the current price of the crypto currency specified, along with some other stats', inline: false },
        { name: prefix+'coin details [crypto currency]', value: 'shows the developer details and in depth details of the specified coin', inline: false }
      )
        message.channel.send(random);
    }
    if (message.content.toLowerCase() === prefix+"help"){
      let random = new Discord.MessageEmbed()
        .setTitle('help menu')
        .addFields(
        { name: 'my current prefix is: ', value: prefix, inline: false},
        { name: prefix+'help music', value: 'music bot commands', inline: true },
      	{ name: prefix+'help fun', value: 'fun commands (like rickrolling)', inline: true },
        //{name: '\u200B', value: '\u200B'},
    		{ name: prefix+'help currency', value: 'currency commands', inline: true },
    		{ name: prefix+'help admin', value: 'special admin-only commands', inline: true },
        { name: prefix+'help math', value: 'Math commands', inline: true },
    		{ name: prefix+"help I've", value: 'Nothing here', inline: true },
        { name: prefix+"help language", value: "translate commands", inline: true},
        { name: prefix+"help crypto", value: "crypto commands", inline: true},
        { name: prefix+"help covid", value: "covid commands", inline: true},
    	)
        message.channel.send(random);
    }
    if (message.content.startsWith(prefix+"help math")){
        if (message.content.toLowerCase() === prefix+"help math"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math menu')
        .addFields(
        { name: 'simple operations', value: prefix+'help math simple operations', inline: true },
      	{ name: 'trigonometry', value: prefix+'help math trigonometry', inline: true },
    		{ name: 'hyperbolic trig', value: prefix+'help math hyperbolic trig', inline: true },
    		{ name: 'math functions', value: prefix+'help math math functions', inline: true },
        { name: 'Algebra', value: prefix+'help math algebra', inline: true},
        { name: 'Solve equations', value: prefix+'help math solve', inline: true},
        { name: 'Calculus', value: prefix+'help math calculus', inline: true},
    	)
        message.channel.send(random);
    }
        if (message.content.toLowerCase() === prefix+"help math solve"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math menu')
        .addFields(
        { name: 'solve simple euations', value: prefix+'evaluate solve (x+5=10, x) first spot is the equation, second spot is the variable to solve for.', inline: true },
      	{ name: 'solve quadratic equations', value: prefix+'quadratic solve---this will then ask you what values of a, b, and c, you want in your equation', inline: true },
        { name: 'solve cubic equations', value: prefix+'cubic solve --- this will ask you the same things as quadratic solve', inline: true},
    	)
        message.channel.send(random);
    }
        if (message.content.toLowerCase() === prefix+"help math simple operations"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math simple operations menu')
        .addFields(
      { name: 'To use these, do:', value: prefix+'solve 5*5=x, or something like that'},
      { name: 'addition', value: 'use a "plus sign" [ + ]', inline: true },
      { name: 'subtraction', value: 'use a "minus sign" [ - ]', inline: true },
      { name: 'multiplication', value: 'use a "star" [ * ]', inline: true },
      { name: 'division', value: 'use a "slash sign" [ / ]', inline: true },
      { name: 'exponents', value: 'use a "carrot sign" [ ^ ]', inline: true},
    )
    message.channel.send(random);
    }
        if (message.content.toLowerCase() === prefix+"help math trigonometry"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math trigogometry menu')
        .addFields(
      { name: 'sine', value: prefix+'evaluate sin(x)', inline: true },
      { name: 'cosine', value: prefix+'evaluate cos(x)', inline: true },
      { name: 'tangent', value: prefix+'evaluate tan(x)', inline: true },
      { name: 'acos', value: prefix+'evaluate acos(x)', inline: true },
      { name: 'asin', value:prefix+ 'evaluate asin(x)', inline: true},
      { name: 'atan', value: prefix+'evaluate atan(x)', inline: true},
      { name: 'sec', value: prefix+'evaluate sec(x)', inline: true},
      { name: 'csec', value: prefix+'evaluate csec(x)', inline: true},
      { name: 'csc', value: prefix+'evaluate csc(x)', inline: true},
      { name: 'cot', value: prefix+'evaluate cot(x)', inline: true},
      { name: 'asec', value:prefix+ 'evaluate asec(x)', inline: true},
      { name: 'acsc', value: prefix+'evaluate acsc(x)', inline: true},
      { name: 'acot', value: prefix+'evaluate acot(x)', inline: true},
      { name: 'atan2', value: prefix+'evaluate atan2(x,y)', inline: true}
      )
      message.channel.send(random);
    }
        if (message.content.toLowerCase() === prefix+"help math hyperbolic trig"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math hyperbolic trigogometry menu')
        .addFields(
      { name: 'cosh', value: prefix+'evaluate cosh(x)', inline: true },
      { name: 'sinh', value: prefix+'evaluate sinh(x)', inline: true },
      { name: 'tanh', value: prefix+'evaluate tanh(x)', inline: true },
      { name: 'sech', value: prefix+'evaluate sech(x)', inline: true },
      { name: 'csch', value: prefix+'evaluate csch(x)', inline: true},
      { name: 'coth', value: prefix+'evaluate coth(x)', inline: true},
      { name: 'acosh', value: prefix+'evaluate acosh(x)', inline: true},
      { name: 'asinh', value: prefix+'evaluate asinh(x)', inline: true},
      { name: 'atanh', value: prefix+'evaluate atanh(x)', inline: true},
      { name: 'asech', value: prefix+'evaluate asech(x)', inline: true},
      { name: 'acsch', value: prefix+'evaluate acsch(x)', inline: true},
      { name: 'acoth', value: prefix+'evaluate acoth(x)', inline: true},
      )
      message.channel.send(random);
    }
        if (message.content.toLowerCase() === prefix+"help math math functions"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math math functions menu')
        .addFields(
      { name: 'log', value: prefix+'evaluate log(x)', inline: true },
      { name: 'log10', value: prefix+'evaluate log10(x)', inline: true },
      { name: 'abs', value: prefix+'evaluate abs(x)', inline: true},
      { name: 'floor', value: prefix+'evaluate floor(x)', inline: true},
      { name: 'ceil', value: prefix+'evaluate ceil(x)', inline: true},
      { name: 'simplify', value: prefix+'evaluate simplify(expression)', inline: true},
      { name: 'Si', value: prefix+'evaluate Si(x)', inline: true},
      { name: 'Ci', value: prefix+'evaluate Ci(x)', inline: true},
      { name: 'Ei', value: prefix+'evaluate Ei(x)', inline: true},
      { name: 'rect', value: prefix+'evaluate rect(x)', inline: true},
      { name: 'step', value: prefix+'evaluate step(x)', inline: true},
      { name: 'sinc', value: prefix+'evaluate sinc(x)', inline: true},
      { name: 'Shi', value: prefix+'evaluate Shi(x)', inline: true},
      { name: 'Chi', value: prefix+'evaluate Chi(x)', inline: true},
      { name: 'complete the square', value: prefix+'evaluate sqcomp(x)', inline: true},
      { name: 'factorial', value: prefix+'evaluate fact(x)', inline: true},
      { name: 'double factorial', value: prefix+'evaluate dfactorial(x)', inline: true},
      { name: 'exp', value: prefix+'evaluate exp(x)', inline: true},
      { name: 'erf', value: prefix+'evaluate erf(x)', inline: true},
      { name: 'sign', value: prefix+'evaluate sign(x)', inline: true},
      { name: 'round', value: prefix+'evaluate round(x)', inline: true},
      { name: 'pfactor', value: prefix+'evaluate pfactor(x)', inline: true},
      { name: 'sqrt', value: prefix+'evaluate sqrt(x)', inline: true},
      { name: 'fib', value: prefix+'evaluate fib(x)', inline: true},
      )
      let random1 = new Discord.MessageEmbed()
        .addFields(
          { name: 'tri', value: prefix+'evaluate tri(x)', inline: true},
          { name: 'line', value: prefix+'evaluate line ([x1,y1], [x2,y2])', inline: true },
          { name: 'mod', value: prefix+'evaluate mod (x,y)', inline: true },
      )
      message.channel.send(random);
      message.channel.send(random1)
    }
        if (message.content.toLowerCase() === prefix+"help math algebra"){
      let random = new Discord.MessageEmbed()
        .setTitle('help math algebra menu')
        .addFields(
      { name: 'lcm', value: prefix+'evaluate lcm', inline: true },
      { name: 'gcf', value: prefix+'evaluate gcf', inline: true },
      { name: 'roots', value: prefix+'evaluate roots(polynomial)', inline: true },
      { name: 'degree', value: prefix+'evaluate deg(polynomial)', inline: true},
      { name: 'coeffs', value: prefix+'evaluate coeffs(polynomial)', inline: true}
      )
      message.channel.send(random);
    }
        if (message.content.toLowerCase() === prefix+"help math calculus"){
          let random = new Discord.MessageEmbed()
            .setTitle('help math algebra menu')
            .addFields(
          { name: 'sum', value: prefix+'evaluate sum(x+1, x, 1, 5)', inline: true },
          { name: 'product', value: prefix+'evaluate product(x+1, x, 1, 20)', inline: true },
          { name: 'derivate', value: prefix+'evaluate diff(cos(x)*sin(x), x)', inline: true },
          { name: 'integral', value: prefix+'evaluate integrate(sec(x)^2, x)', inline: true},
          { name: 'definite integral', value: prefix+'evaluate defint(x^2+2*x+1,0, 10)', inline: true}
          )
          message.channel.send(random);
        }
        }

    if (message.content.startsWith(prefix+"help language")){
      if (message.content.toLowerCase() === prefix+"help language"){
      let random = new Discord.MessageEmbed()
        .setTitle('help language')
        .addFields(
        { name: 'translate from english', value: prefix+'translate [language code] [stuff you want to translate from english]', inline: false },
        { name: 'translate to english', value: prefix+'translate [foreign language]  translates stuff to english', inline: false },
        { name: 'help language codes', value:prefix+'displays all of the country codes I support'}
      )
        message.channel.send(random);
      }
      if (message.content.toLowerCase() === prefix+"help language codes"){
  message.channel.send("https://cdn.discordapp.com/attachments/795049106976276512/806337908629700608/unknown.png");
      }
    }
    if (message.content.toLowerCase() === prefix+"help covid"){
      let random = new Discord.MessageEmbed()
        .setTitle('help covid menu')
        .addFields(
        { name: prefix+'covid', value: 'shows covid stats for the US', inline: false },
        { name: prefix+'covid [country]', value: 'shows covid stats for the specified country', inline: false },
      )
        message.channel.send(random);
    }
  }
  if (message.content.toLowerCase() === prefix+"quadratic solve"){
  message.channel.send("ok, to enter in a quadratic equation, first enter in 'a', in the equation ax^2+bx+c=0");
  //var pattern = /[ !@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]/g;
  var pattern2 = /[a-zA-Z]/g;
  var pattern = /[0-9]/g
  var a = 0;
  var b = 0;
  var c = 0;
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
  if (pattern.test(collected.first().content)){
    a = collected.first().content;
  //message.channel.send("now enter b");
  ////////////-----------____________________________________________________________________
  let filter = m => m.author.id === message.author.id
  message.channel.send('now enter b').then(() => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
          })
          .then(message => {
            message = message.first()
            var pattern = /[0-9]/g
            if (pattern.test(message.content)) {
              b = message.content;
              message.channel.send(`ok, enter in c`);
  //____________________________________________________________________
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
    var pattern = /[0-9]/g
  if (pattern.test(collected.first().content)) {
    let c = collected.first().content;
      message.reply('ok, calculating the solution.');
      let a1 = Number(a);
      let b1 = Number(b);
      let c1 = Number(c);
      message.channel.send("the solutions to: "+ a1 + "x^2 + "+ b1+ "x + "+c1+" is: ");
      const rootsArr = quadSolver(a1, b1, c1);
      rootsArr.map(root => message.channel.send(`Root: ${root}`));
  }
  else message.reply('aborted');
  }).catch(() => {
  message.reply('No answer after 30 seconds, operation canceled.');
  });

  //____________________________________________________________________


            }
            else message.channel.send("I didn't get a number, terminating...");
          })
          .catch(collected => {
              message.channel.send("I didn't get a response in 30 seconds, terminating..");
          });
      })

  }else{
    message.channel.send("I could not read that, make sure that there are no letters or symbols in there.");
    return;
  }

  }).catch(() => {
  message.reply('No answer after 30 seconds, operation canceled.');
  });
  }
  if (message.content.toLowerCase() === prefix+"cubic solve"){
  message.channel.send("ok, to enter in cubic equation, first enter in 'a', in the equation ax^3+bx^2+cx+d=0");
  //var pattern = /[ !@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]/g;
  var pattern2 = /[a-zA-Z]/g;
  var pattern = /[0-9]/g
  var a = 0;
  var b = 0;
  var c = 0;
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
  if (pattern.test(collected.first().content)){
    a = collected.first().content;
  //message.channel.send("now enter b");
  ////////////-----------____________________________________________________________________
  let filter = m => m.author.id === message.author.id
  message.channel.send('now enter b').then(() => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
          })
          .then(message => {
            message = message.first()
            var pattern = /[0-9]/g
            if (pattern.test(message.content)) {
              b = message.content;
              message.channel.send(`ok, enter in c`);
  //____________________________________________________________________
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
    var pattern = /[0-9]/g
  if (pattern.test(collected.first().content)) {
    let c = collected.first().content;
      message.reply('ok, now enter in D');
  //____________________________________________________________________
  message.channel.awaitMessages(m => m.author.id === message.author.id,
  {max: 1, time: 30000}).then(collected => {
    var pattern = /[0-9]/g
  if (pattern.test(collected.first().content)) {
    let d = collected.first().content;
      message.reply('ok, calculating the solution.');
      let a1 = Number(a);
      let b1 = Number(b);
      let c1 = Number(c);
      let d1 = Number(d);
      message.channel.send("the solutions to: "+ a1 + "x^3 + "+ b1+ "x^2 + "+c1+"x+"+d1+" is: ");
  let solution = cubic.solveCubicEquation(a1,b1,c1,d1);
  let length = solution.length;
  for (x = 0; x<length; x++){
    let y = x+1;
    message.channel.send("x_"+y+": "+solution[x].re);
  }
  }
  else message.reply("that was not a number.");
  }).catch(() => {
  message.reply('No answer after 30 seconds, operation canceled.');
  });

  //____________________________________________________________________




  }
  else message.reply('aborted');
  }).catch(() => {
  message.reply('No answer after 30 seconds, operation canceled.');
  });

  //____________________________________________________________________


            }
            else message.channel.send("I didn't get a number, terminating...");
          })
          .catch(collected => {
              message.channel.send("I didn't get a response in 30 seconds, terminating..");
          });
      })

  }else{
    message.channel.send("I could not read that, make sure that there are no letters or symbols in there.");
    return;
  }

  }).catch(() => {
  message.reply('No answer after 30 seconds, operation canceled.');
  });
  }
  if (message.content.toLowerCase().startsWith(prefix+"coin")&& !message.content.toLowerCase().includes("details")){
    getCoin();
    async function getCoin(){
    let coin = message.content.toLowerCase().slice(5+prefixlength);
    if (coin.includes(" ")){
      message.channel.send("that is an invalid coin");
      return;
    }
    let data = await CoinGeckoClient.coins.fetch(coin);
    if (!data.data.image){
      message.channel.send("Could not find coin with the given name");
      return;
    }
  ///////////////////////////////////////////////
  let random = new Discord.MessageEmbed()
    .setTitle(data.data.name)
    .setThumbnail(data.data.image.large)
    .addFields(
      { name: 'current price', value: "$"+data.data.market_data.current_price.usd+" usd", inline: true },
      { name: '24h low', value: "$"+data.data.market_data.low_24h.usd+ "usd", inline: true },
      { name: '24h high', value: "$"+data.data.market_data.high_24h.usd+" usd", inline: true },
      { name: "7d price change", value: data.data.market_data.price_change_percentage_24h+"%", inline: true },
      { name: "14d price change", value: data.data.market_data.price_change_percentage_7d+"%", inline: true },
      { name: "30d price change", value: data.data.market_data.price_change_percentage_30d+"%", inline: true },
      { name: "60d price change", value: data.data.market_data.price_change_percentage_60d+"%", inline: true },
      { name: "200d price change", value: data.data.market_data.price_change_percentage_200d+"%", inline: true },
      { name: "1y price change", value: data.data.market_data.price_change_percentage_1y+"%", inline: true },
      { name: "market cap", value: "$"+data.data.market_data.market_cap.usd+" usd", inline: true},
      { name: 'market cap rank', value: "#"+data.data.market_cap_rank, inline: true },
  )
    message.channel.send(random);
  }
  }
  if (message.content.toLowerCase().startsWith(prefix+"coin details")){
    getCoin();
    async function getCoin(){
    let coin = message.content.toLowerCase().slice(13+prefixlength);
    if (coin.includes(" ")){
      message.channel.send("that is an invalid coin");
      return;
    }
    let data = await CoinGeckoClient.coins.fetch(coin);
  var maxsupply;
  var cirsupply;
  var desc;
  if (!data.data.image){
    message.channel.send("Could not find coin with the given name");
  }
  if (data.data.market_data.max_supply === null) maxsupply = "none";
  else maxsupply = data.data.market_data.max_supply;
  if (data.data.market_data.circulating_supply === null) maxsupply = "no data";
  else cirsupply = data.data.market_data.circulating_supply;
  if (data.data.ico_data === undefined) desc = "none";
  else desc = data.data.ico_data.short_desc
  let random = new Discord.MessageEmbed()
  .setTitle(data.data.name)
  .setThumbnail(data.data.image.large)
    .addFields(
      { name: "Short Description", value: desc, inline: false},
      { name: 'Home Page', value: data.data.links.homepage[0], inline: true },
      { name: 'Block Explorer', value: data.data.links.blockchain_site[0], inline: true },
      { name: '24h high', value: "$"+data.data.market_data.high_24h.usd+" usd", inline: true },
      { name: "forks", value: data.data.developer_data.forks, inline: true },
      { name: "total issues", value: data.data.developer_data.total_issues, inline: true },
      { name: "closed issues", value: data.data.developer_data.closed_issues, inline: true },
      { name: "pull requests", value: data.data.developer_data.pull_requests_merged, inline: true },
      { name: "public interest", value: data.data.public_interest_stats.alexa_rank+" in alexa rank points", inline: true },
      { name: "developer score", value: data.data.developer_score, inline: true },
      { name: "community score", value: data.data.community_score, inline: true},
      { name: 'liquidity score', value: data.data.liquidity_score, inline: true },
      { name: "max_supply", value: maxsupply, inline: true},
      { name: "circulating supply", value: cirsupply, inline: true},
  )
    message.channel.send(random);
  }
  }
  if (message.content.toLowerCase().startsWith(prefix+"covid")){
    corona();
    async function corona(){
      var country;
      if (message.content.length === 5+prefixlength){
        country = "united states";
      }else{
        country = message.content.toLowerCase().slice(6+prefixlength);
      }
      let cor = await covid.countries({country:country});
     var myDate = new Date(cor.updated);
     let lastTime = myDate.toLocaleString()
     let random = new Discord.MessageEmbed()
     .setTitle(cor.country+" Covid Info updated: "+lastTime)
     .setThumbnail(cor.countryInfo.flag)
       .addFields(
         { name: "Total Cases", value: cor.cases, inline: true},
         { name: 'Total Deaths', value: cor.deaths, inline: true },
         { name: 'Total Recovered', value: cor.recovered, inline: true },
         { name: "Today's cases", value: cor.todayCases, inline: true },
         { name: "Today's deaths", value: cor.todayDeaths, inline: true },
         { name: "Today's recovered", value: cor.todayRecovered, inline: true },
         { name: "Active Hospitalizations", value: cor.active, inline: true },
         { name: "Critical Hospitalizations", value: cor.critical, inline: true },
         { name: "Cases Per One Million", value: cor.casesPerOneMillion, inline: true },
         { name: "Deaths Per One Million", value: cor.casesPerOneMillion, inline: true },
         { name: "Total Tests", value: cor.tests, inline: true},
         { name: 'Tests Per One Million', value: cor.testsPerOneMillion, inline: true },
     )
       message.channel.send(random);
   }
  }
  if (message.content.toLowerCase() === prefix+"reset bot"||message.content.toLowerCase() === "~reset bot"){
    if (message.guild.ownerID !== message.author.id){
      message.channel.send("You have to be a server Owner to run this command");
      return;
    }
    message.channel.send("WARNING, this will clear the entire database's entry on your server. This will reset EVERYTHING RELATED TO THIS BOT IN THIS SERVER. \n YOU SHOULD ONLY USE THIS COMMAND IF THERE IS A BUG AND I DON'T WORK ANYMORE! WE FIRST ENCOURAGE YOU TO ASK THE COMMNUITY FIRST BEFORE YOU DO THIS!\nARE YOU SURE YOU WANT TO DO THIS? \n If you are sure, type the name of your server below (case sensitive)")
    message.channel.awaitMessages(m => m.author.id === message.author.id,
    {max: 1, time: 30000}).then(collected => {
  if (collected.first().content === message.guild.name){
    dropcollection().catch();
    async function dropcollection(){
  message.channel.send("This will take a minute or two. DO NOT INTERRUPT OPERATION\nDropping Collection...");
  let guildid = collected.first().guild.id;
  const db = mongoclient.db("discordbot");
  await mongoclient.db("discordbot").collection(guildid).drop();
  await sleep(20000);
  message.channel.send("Almost Done...");
  await sleep(20000);
  message.channel.send("Done.\n Clearing User Data...");
  await sleep(10000);
  message.channel.send('Done. Finishing Up...');
  await sleep(5000);
  message.channel.send("Finished");
  }
  return;
  }
    else message.reply('aborted');
    return;
    }).catch(() => {
    message.reply('No answer after 30 seconds, operation canceled.');
    return;
    });
    return;
  }
  if (message){
    if (!message.mentions.users.first()){
      return;
    }
    var letters = /^[A-Za-z]+$/;
  if(!message.content.toLowerCase().includes("<@!")){
     return;
   }
    let word2 = message.mentions.users.first().id;
    if (word2 === client.user.id && !message.content.toLowerCase().includes(prefix)){
    message.channel.send("my prefix is: "+prefix+"\n"+prefix+"help for help");
  }
  }
  async function unsplash(searchquery){
    const unsplash = createApi({ accessKey: 'KBPBdezF2mXuMn1zD-cHJ_VcPBUZzgEg35pY3PULdaU' });
  unsplash.search.getPhotos({
    query: searchquery,
    page: 1,
    perPage: 1,
    color: 'green',
    orientation: 'portrait',
  }).then(result =>{
    if (result.errors){
      console.log("errors occurred".error);
    }
    else{
      let photo = result.response.results[0];
      if (photo === undefined){
        message.channel.send("couldn't find an image of that in the unsplash database");
        return;
      }
      let photolink = photo.urls.raw;
      message.channel.send(photolink);
    }
  })
  }
  banned = 0;
        } catch (e) {
          console.error(e.warn);
        } finally {
        }
      }
})
client.on('messageUpdate', (oldMessage, newMessage) => {
main();
  async function main(){
    const uri = "mongodb+srv://monkey:monkey2008@cluster0.exqqa.mongodb.net/test";
    try {
      const db = mongoclient.db("discordbot");
      async function updateInfractions(mongoclient, nameOfListing, addpoints){
        let userid = newMessage.author.id;
        let collection = newMessage.guild.id;
        let result = await mongoclient.db("discordbot").collection(newMessage.guild.id)
        .findOne({ name: userid});
        if (result){
          let lookup = JSON.parse(JSON.stringify(result));
          let numofpoints = lookup.infractions;
          let x = Number(numofpoints);
          let updatepoints = x + addpoints;

          result = await mongoclient.db("discordbot").collection(newMessage.guild.id)
          .updateOne({ name: nameOfListing}, {$set: {infractions: updatepoints}})
        }
      }
      async function findlistingbyname(mongoclient, nameOfListing){
                    let result = await mongoclient.db("discordbot").collection(newMessage.guild.id)
                    .findOne({ _id: "101"});

                    if (result){
                      let dbwords = JSON.parse(JSON.stringify(result));
                        for (var k = 0; k<dbwords.badwords.length; k++){
                          let noSpace = newMessage.content.toLowerCase().replace(/\s+/g, '');
                          let dbSpace = dbwords.badwords[k].toLowerCase().replace(/\s+/g, '');
                          if (noSpace.includes(dbwords.badwords[k])||newMessage.content.toLowerCase().includes(dbwords.badwords[k])||noSpace.includes(dbSpace)){
                            newMessage.delete();
                            const db = mongoclient.db("discordbot");
                            let userid = newMessage.author.id;
                          newMessage.channel.send('Message deleted and updated your infractions for the admins to see.');
                          let random = Math.floor(Math.random()*10);
                              await updateInfractions(mongoclient, userid, 1);
                              return "stop";
                          }
                        }

                    } else {
                    }

                    let dbwords = result;
          }
  findlistingbyname(mongoclient, "101");
    } catch (e) {
      console.error(e);
    }
  }

})
client.on('messageDelete', async function(message, channel){
    let counting = await checkStuff(mongoclient, "counting");
    if (counting.channel === message.channel.name){
      message.channel.send(message.author.tag+" just deleted the message: "+message.content+". I didn't change any stats, so just continue as if "+message.author.tag+" didn't delete anything.")
    }
    async function checkStuff(mongoclient, name){
      let result = await mongoclient.db("discordbot").collection(message.guild.id)
      .findOne({name: name});
      if (result){
        return result;
      }
    }
});

return mongoclient;
});
mongoclient.close();

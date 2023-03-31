
const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');
var start = require('./settings/command.js')
start.start();
var minecrafrBot = require("./settings/t4st.js");
var stopp = require("./settings/settings.json");
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });




client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "startbot") {                                      // !startBot - старт бота
    minecrafrBot.minecrafrBot()
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Start Bot')
      await interaction.reply({ embeds: [exampleEmbed] });
  };

  if (interaction.commandName === "setpackeoff") {                              //!setpackeoff - показ чата выкл
    const json1 = readFileSync('./settings/settings.json', 'utf8');
    const object = JSON.parse(json1);
    object.packe = false;
    const json2 = JSON.stringify(object);
    writeFileSync('./settings/settings.json',json2)
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Показ чата вsключен')
      await interaction.reply({ embeds: [exampleEmbed] });
      
  };

  if (interaction.commandName === "setpackeon") {                               //!setpackeoт - показ чата вкл
    const json1 = readFileSync('./settings/settings.json', 'utf8');
    const object = JSON.parse(json1);
    object.packe = true;
    const json2 = JSON.stringify(object);
    writeFileSync('./settings/settings.json',json2)
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Показ чата включен')
      await interaction.reply({ embeds: [exampleEmbed] });

  };

  if (interaction.commandName === "setplayeroff") {                             //!setplayeroff - показ игроков выкл
    const json1 = readFileSync('./settings/settings.json', 'utf8');
    const object = JSON.parse(json1);
    object.player = false;
    const json2 = JSON.stringify(object);
    writeFileSync('./settings/settings.json',json2)
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Показ игроков выключен')
      await interaction.reply({ embeds: [exampleEmbed] });

  };

  if (interaction.commandName === "setplayeron") {                              //!setplayeroff - показ игроков вкл
    const json1 = readFileSync('./settings/settings.json', 'utf8');
    const object = JSON.parse(json1);
    object.player = true;
    const json2 = JSON.stringify(object);
    writeFileSync('./settings/settings.json',json2)
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Показ игроков включен')
      await interaction.reply({ embeds: [exampleEmbed] });

  };

  if (interaction.commandName === "setspamon") {                              //!setplayeroff - показ игроков вкл
    const json1 = readFileSync('./settings/settings.json', 'utf8');
    const object = JSON.parse(json1);
    object.spam = true;
    const json2 = JSON.stringify(object);
    writeFileSync('./settings/settings.json',json2)
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Cпам вкл')
      await interaction.reply({ embeds: [exampleEmbed] });

  };

  if (interaction.commandName === "setspamoff") {                              //!setplayeroff - показ игроков вкл
    const json1 = readFileSync('./settings/settings.json', 'utf8');
    const object = JSON.parse(json1);
    object.spam = false;
    const json2 = JSON.stringify(object);
    writeFileSync('./settings/settings.json',json2)
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Cпам выкл')
      await interaction.reply({ embeds: [exampleEmbed] });

  };

  if (interaction.commandName === "stop"){
    stopp.stopp()
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('Бот выключен')
      await interaction.reply({ embeds: [exampleEmbed] });
  };
  
  if (interaction.commandName === "help"){
    let exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF) 
      .setDescription('HELP COMMAND')
      .setTitle('/help - помощь\r/startBot - старт бот\r/stop - выкл бота\r/setpackeoff - показ игрового чата выкл\r/setpackeon - показ игрокового чата вкл\r/setplayeroff - показ игроков выкл\r/setplayeron - показ игроков вкл\r/setspamoff - выкл спам\r/setspamon - вкл спам')
      await interaction.reply({ embeds: [exampleEmbed] });
  }



});


// setTimeout(function(){
//     minecrafrBot1.minecrafrBot()
// },1000 * 25)

client.login('');

const express = require('express');
const app = express();
require('dotenv').config();
const colors = require("colors");


app.listen(9080, () => {
  console.log(('Express is ready.').blue.bold)
});

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const { ActivityType } = require("discord.js");

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Minecraft ',
            type: "PLAYING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});
client.on('message', message => {
  if(message.content == "hi") {
    message.channel.send("Hello!");
  } else if (message.content == "Dead") {
    message.channel.send("Thank God! Atleast You are Alive");
  }
});

client.login('MTEyNzc4NTE4NDMyNzEwNjYyMA.G76hZw.vJ_-jEpuNaoq98ebhniCWAX_qfTyYoclO9AIdI');

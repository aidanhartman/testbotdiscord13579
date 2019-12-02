const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  if (message.author.bot || !message.guild) return; // If it's a bot or not in the server, ignore it

  const prefix = "?"; // your prefix
  if(message.content.indexOf(prefix) !== 0) return; // If the message doesn't start with the prefix, ignore it
  let args = message.content.slice(prefix.length).trim().split(/ +/g); // Get the message arguments AKA input
  let command = args.shift().toLowerCase(); // Get the command
  
  if (command === "ping") {
     message.channel.send("Pong!"); // First command
  }
  if (command === "hello") {
    message.channel.send("hi"); // Seccond command
  }
  if (command === "server") {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  if (command === "user") {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  if (command === "kick") {
  
    let kUser = message.guild.member(message.mentions.users.first() || message.members.guild(args[0]));
    if(!kUser) return message.channel.send("Can't find user");
    let kReason = args.join(" ").slice(22);

    return;
  }
  bot.on('ready', () => {
    console.log('This bot is active!');
})
if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
if (command === "koala") {
  message.channel.send(`https://images.app.goo.gl/ja15km3Km4KgCmyk9`);
}

});

client.login("NjQ2MzcwNTk2MTcwNjI5MjAw.XeAEew.oygumx7ZDeMVshqZNyRyJxVDd1o");
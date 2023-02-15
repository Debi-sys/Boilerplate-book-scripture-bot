const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const book = require('./book.js');


client.on('message', message => {
   // Check if the message is a command and if it matches the pattern
if (message.content.startsWith('COMMANDNAME')) {
  const input = message.content.split(' ')[1];
  const regex = /^(\d+):(\d+)-?(\d+)?$/;
  const matches = input.match(regex);

  if (matches) {
    const chapter = parseInt(matches[1]);
    const startLine = parseInt(matches[2]);
    const endLine = matches[3] ? parseInt(matches[3]) : startLine;

    let textSnippet = '';
    for (let line = startLine; line <= endLine; line++) {
      const snippet = book[`${chapter}:${line}`];
      if (snippet) {
        textSnippet += snippet + '\n\n';
      }
    }

    if (textSnippet) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`BOOKNAME ${chapter}:${startLine}-${endLine}`)
        .setDescription(textSnippet)
        .setColor('2f3136');

      message.channel.send({ embeds: [embed] });
    } else {
      message.reply(`Sorry, I couldn't find any text snippets for BOOKNAME ${chapter}:${startLine}-${endLine}.`);
    }
  } else {
    message.reply(`Sorry, I couldn't understand your input. Please use the format "COMMANDNAME <chapter>:<start_line>-<end_line>".`);
  }
}


});


client.login('TOKEN');

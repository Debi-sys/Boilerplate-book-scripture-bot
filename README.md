# Boilerplate-book-scripture-bot
This is a boilerplate bot for sending verses of books/scripture.

## Usage
First of all, you need a book in a specific format.
```txt
"1:1": "I am a book, and this is the first verse of my first chapter",
"1:2": "And this is my second verse of the first chapter!."
```
It needs to look like this.
Then make it into a .js file called book.js, place it in the same folder as the main bot file, and make it look like this
```js
book = {
"1:1": "I am a book, and this is the first verse of my first chapter",
"1:2": "And this is my second verse of the first chapter!."
   };
module.exports = book;
```
Then, in the main code replace (commandname) with your command name, and (bookname) with your book name. 
Create a bot in the [Discord Developer Portal](https://discord.com/developers/applications), and at the bottom of the main code, replace (token) with your bot token. Download node.js and discord.js, and in the console run
```bash
node bot.js
```
Invite it using your bot invite link, and it should work! (Please note, that you need to check Message Content Intent in the bot section of your application)
### Disclaimer 
This bot was built using Discord.js v13.12.0 LTS, so download that one. The bot will not say "Ready!" in the console when it turns on, so don't panic if you don't see any console output and just try and test it. It will NOT give you a developer badge, since it does not use slash commands.
### Issues
Even when requesting only one verse, the bot still sets the title of embed as "BOOKNAME 1:1-1", i am working on a fix right now. If you notice any other issues, please post about it here.

module.exports = (client) => {
    const chalk = require('chalk');
    const config = client.config
    const pkg = require("../package.json");
    // console.log(client.channels)
    console.log(chalk.green("|--------------------(Loading Complete)------------------------|"));
    console.log(chalk.green(`DB8Bot is now online and ready to go! Here are some information:`));
    console.log(chalk.green(`DB8Bot loaded successfully @ ${Date()}`));
    console.log(chalk.green(`Owner: ${config.ownerTag}`));
    console.log(chalk.green(`Logged in as: ${config.name} `));
    console.log(chalk.green(`Prefix: ${config.prefix}`));
    // console.log(chalk.green(`Ready to serve in ${client.channels} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`));
    client.user.setActivity(`Bot của ☆sᴛᴀʀ❀ᴡᴏʀʟᴅ♬ | script by Model`)
}
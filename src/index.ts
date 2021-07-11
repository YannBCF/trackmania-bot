import Discord from 'discord.js';
import DiscordEvents from './events/discordEvents.js';
const client = new Discord.Client;


async function main(): Promise<void> {
    await client.login(process.env.TOKEN);
    await new Promise<void>(resolve => client.once('ready', resolve));
    console.log('Im ready!');

    client.on('message', DiscordEvents.onMessage.bind(null, client));
}

main();
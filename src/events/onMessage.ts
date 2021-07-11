import { Client, Message } from 'discord.js';

export function onMessage(client: Client, message: Message): void {
    console.log(client.options);
    console.log(message.id);
}
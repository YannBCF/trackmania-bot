import { onMessage as _onMessage } from './onMessage.js';
import { Client, Message } from 'discord.js';

export default class DiscordEvents {
    static onMessage(client: Client, message: Message) {
        _onMessage(client, message);
    }
}
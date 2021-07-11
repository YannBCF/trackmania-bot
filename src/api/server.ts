import Fastify, { FastifyInstance } from 'fastify';
export const server: FastifyInstance = Fastify({});

import registerRoutes from './router.js';

async function main(): Promise<void> {
    try {
        registerRoutes(server);
        await server.listen(3000);
        console.log('HTTP server listening at port 3000');
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}

main();
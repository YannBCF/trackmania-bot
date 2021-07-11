import { FastifyInstance } from 'fastify';

export default function registerRoutes(server: FastifyInstance): void {
    server.register(import('./routes/v1/getCurrentTrack.js'), { prefix: 'v1' });
}
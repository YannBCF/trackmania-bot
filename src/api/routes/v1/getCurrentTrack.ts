import { RouteShorthandOptions, FastifyReply, FastifyRequest, FastifyInstance } from 'fastify'

export default async function(fastify: FastifyInstance, _opts: RouteShorthandOptions): Promise<void> {
    fastify.get('/getCurrentTrack', async function(_request: FastifyRequest, _reply: FastifyReply) {
        // _reply.code(200).send('Got it bro');
        return { response: 'Summer 13' };
    });
}
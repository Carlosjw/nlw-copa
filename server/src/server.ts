import Fastify from "fastify";

async function bootstrap() {
    const fastify = Fastify({
        logger: true, // solta logs de tudo o que está acontencendo em nossa aplicação (erros, requisição, e outros tipos de monitoramento)
    })

    // criando rota de contagem de bolão
    fastify.get('/pools/count', () => {
        return {count: 2}
    })

    await fastify.listen({port: 3333})
}

bootstrap()
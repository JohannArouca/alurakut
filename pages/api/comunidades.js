import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = 'adcd8eb53658f1e900a212068ddbf0';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "968451",
            ...request.body,
            /* title: "Comunidade teste",
            imageUrl: "https://github.com/johannarouca.png",
            creatorSlug: "johannarouca" */
        })

        response.json({
            dados: 'Algum dado',
            registroCriado: registroCriado,
        })
    }
    
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST temos!'
    })
}
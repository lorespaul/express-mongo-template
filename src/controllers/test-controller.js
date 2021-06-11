'use strict';

module.exports = function(server){

    const mixinsRepository = server.repositories.mixinsRepository;

    server.app.get('/', async function(_req, res){
        try {
            let result = await server.connector.get('mixins', {
                $or: [{
                    title: "test title"
                }, {
                    description: "Prova inserimento 1"
                }]
            });
    
            res.send(JSON.stringify(result));
        } catch(e){
            res.sendStatus(500);
        }
    });


    server.app.get('/test', async function(req, res){
        try {
            let result = await mixinsRepository.getFirst();
            res.send(JSON.stringify(result));
        } catch(e){
            res.sendStatus(500);
        }
    });

}
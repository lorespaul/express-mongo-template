'use strict';

module.exports = function(app, connector){

    app.get('/', async function(req, res){
        try {
            let result = await connector.get('test_collection', {
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

}
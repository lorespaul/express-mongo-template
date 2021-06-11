'use strict';

const timeUtils = require("../utils/timeUtils");
const Mixin = require('../model/mixin');


module.exports = function(server){

    const app = server.app;
    const mixinsRepository = server.repositories.mixinsRepository;

    app.get('/', async function(_req, res){
        try {
            let result = await mixinsRepository.get();
    
            res.send(JSON.stringify(result));
        } catch(e){
            console.log(e);
            res.sendStatus(500);
        }
    });


    app.get('/test', async function(_req, res){
        try {
            let result = await mixinsRepository.getFirst();
            await timeUtils.wait(2000);
            res.send(JSON.stringify(result));
        } catch(e){
            console.log(e);
            res.sendStatus(500);
        }
    });

    app.get('/testinsert/:title/:description', async function(req, res){
        try {
            let mixin = new Mixin();
            mixin.title = req.params.title;
            mixin.description = req.params.description;
            let result = await mixinsRepository.insert(mixin);
            
            if(result.result.ok){
                res.sendStatus(201);
            } else {
                throw new { message: 'mixin not created' }
            }
        } catch(e){
            console.log(e);
            res.sendStatus(500);
        }
    });

}
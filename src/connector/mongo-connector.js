'use strict';

module.exports = function(config = {
    endpoint: 'localhost',
    port: 27017,
    dbname: 'betanft',
    username: 'mongoadmin',
    password: 'betacom1'
}){
    const MongoClient = require('mongodb').MongoClient;
    
    let url = 'mongodb://';
    if(config.username && config.password){
        url += `${config.username}:${config.password}@`;
    }
    url += `${config.endpoint}`;
    if(config.port){
        url += `:${config.port}`;
    }

    let connect = async () => {
        const client = new MongoClient(url, { useUnifiedTopology: true });
        await client.connect();
        const db = client.db(config.dbname);
        db.client = client;
        return db;
    };

    let close = (db) => {
        db.client.close();
    };

    return {
        get: async (collection, query = {}) => {
            let db = await connect();
            let clt = db.collection(collection);
            let promise = new Promise((res, rej) => {
                clt.find(query).toArray(function(err, docs){
                    if(err){
                        rej(err);
                        return;
                    }
                    res(docs);
                });
            });
            const result = await promise;
            close(db);
            return result;
        }
    };

}
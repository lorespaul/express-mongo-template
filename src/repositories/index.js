
const BaseRepository = function(connector, collection){
    this.connector = connector;
    this.collection = collection;
}

BaseRepository.prototype.get = async function(query = {}) { 
    return await this.connector.get(this.collection, query)
};

BaseRepository.prototype.insert = async function(doc) { 
    return await this.connector.insert(this.collection, doc)
};


let fs = require('fs');

module.exports = function(server){
    if(!server.repositories){
        server.repositories = {};
    }
    
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        let name = file.substr(0, file.indexOf('.'));
        let repo = require('./' + name)(server, BaseRepository);
        let repoName = name[0].toLowerCase() + name.substring(1);
        server.repositories[repoName] = repo;
    });
}
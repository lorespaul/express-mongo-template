
const mixin = require('../model/mixin');
const stdMixin = mixin();

module.exports = function(server, BaseRepository){

    let mixinsRepository = Object.create(new BaseRepository(server.connector, stdMixin.collection));

    mixinsRepository.getFirst = async function() {
        return await this.get({ title: "test title" });
    }

    return mixinsRepository;
}
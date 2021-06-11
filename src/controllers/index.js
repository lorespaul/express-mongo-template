let fs = require('fs');

module.exports = function(app, connector){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app, connector);
    });
}


function useController(app){

}

export default useController; 
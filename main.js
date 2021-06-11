import express from 'express';
// import MongoConnector from './src/connector/mongo-connector';


const Server = {
    run: () => {

        const app = express();
        const port = 3000;
        
        // const connector = new MongoConnector(); 
        
        // require('./src/controllers')(app, connector);
        
        app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));    
        
        return {};
    }
}


export default Server.run();
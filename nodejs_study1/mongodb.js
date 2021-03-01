const MongoClient = require('mongodb').MongoClient;
const DB_NAME = 'mongodb', DB_PWD = 'dilab';
const URI = `mongodb+srv://odiseu:${DB_PWD}@odiseu.lk7jw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const mongoCli = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoCli.connect(err => {
    const collection = client.db(DB_NAME).collection('userdata');
    
    mongoCli.close();
});

class MongoDB {
    constructor(uri) {

    }  
}



module.exports = MongoDB;
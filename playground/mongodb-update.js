// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c784ebaebc923ac4c7c0a90')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c7451e5b70f530f0554e7ab')
    }, {
        $set: {
            name: 'Sidney',
        },
        
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })


    // db.close();
});
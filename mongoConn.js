const { MongoClient , ObjectId  } = require('mongodb')

const connURL = 'mongodb+srv://admin:admin@cluster0.9ll3mzs.mongodb.net/taskDB'
const dbName = 'task-manager'

MongoClient.connect(connURL , { useUnifiedTopology: true } , (error, client) => {
    if(error) return console.log('Unable to connect to database')

    const db = client.db(dbName)
    // db.collection('users').insertOne({
    //     name: 'Rohit',
    //     age: 19
    // })
    // .then(result => console.log("Data inserted" , result.ops ))
    // .catch(error => console.log(error))

    // db.collection('users').insertMany([  
    //     {
    //         name: 'Sohit',
    //         age: 19
    //     },
    //     {
    //         name: 'Navin',
    //         age: 29
    //     }
    // ])
    //     .then(result => console.log("Data inserted -->" , result.ops ))
    //     .catch(error => console.log(error))

    //     db.collection('users').findOne({ name: 'Rohit' })
    // .then(result => console.log("Data found" , result))
    // .catch(error => console.log(error))

    // db.collection('users').find({ name: 'Rohit' })
    // .toArray()
    // .then(result => console.log("Data found" , result))
    // .catch(error => console.log(error))

    //   db.collection('users').updateOne({_id: new ObjectId('643e13e230e6b04f08ad4282') },
    //          { $set: { name: 'Rohit Kumar'} })
    //          .then(result => console.log("Data Updated" , result.modifiedCount))
    //          .catch(error => console.log(error))

    // db.collection('users').updateMany({ age : 19 },
    // { $set: { age : 20} })
    // .then(result => console.log("Data Updated" , result.modifiedCount))
    // .catch(error => console.log(error))

      db.collection('users').deleteOne({_id: new ObjectId('643d14dbc381bf534c8a8776') })
             .then(result => console.log("Data Deleted--->" , result.deletedCount))
             .catch(error => console.log(error))

    db.collection('users').deleteMany({ age : 20 })
    .then(result => console.log("Data Deleted--->" , result.deletedCount))
    .catch(error => console.log(error))


})


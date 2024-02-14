const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

let _db;

// const mongoConnecting = callback => {
   
//    mongoClient.connect('mongodb+srv://hurianarmann:nIWhU8HgbqqWEiJM@cluster0.1ilx3ia.mongodb.net/?retryWrites=true&w=majority')
//    .then(res => {
//      console.log('connect shod');
//      callback(res)
//      _db = res.db().collection('arman').insertOne({name : 'laptop' , price : '12.99'})
//      .then((result)=>{
//       console.log(result);
//      })
//      .catch((error)=>{
//       console.log(error);
//      })
   
//   })
//   .catch(err => {
//      console.log(err);
//   })
// }

const getDb = () => {

   return _db

}
const mongoGettingAll = callback => {
   
   mongoClient.connect('mongodb+srv://hurianarmann:nIWhU8HgbqqWEiJM@cluster0.1ilx3ia.mongodb.net/?retryWrites=true&w=majority')
   .then(res => {

     callback(res)
     _db = res.db().collection('arman')
     .find()
     .toArray()
     .then((product)=>{
        console.log(product);
     })
     .catch((errr)=>{
        console.log(errr);
     })
   
  })
  .catch(err => {
     console.log(err);
  })
}
const mongoGetting = callback => {
   
   mongoClient.connect('mongodb+srv://hurianarmann:nIWhU8HgbqqWEiJM@cluster0.1ilx3ia.mongodb.net/?retryWrites=true&w=majority')
   .then(res => {

     callback(res)
     _db = res.db().collection('arman')
     .find({_id : new mongodb.ObjectId('65c8c226cc9e07a5d170b32e')})
     .next()
     .then((product)=>{
        console.log(product);
     })
     .catch((errr)=>{
        console.log(errr);
     })
   
  })
  .catch(err => {
     console.log(err);
  })
}


const deleteById = () => {
   mongoClient.connect('mongodb+srv://hurianarmann:nIWhU8HgbqqWEiJM@cluster0.1ilx3ia.mongodb.net/?retryWrites=true&w=majority')
   .then(res => {

     _db = res.db().collection('arman')
     .deleteOne({_id : new mongodb.ObjectId('65c8c3067f919cecaa0608e4')})
     .then((product)=>{
        console.log(product);
     })
     .catch((errr)=>{
        console.log(errr);
     })
   
  })
  .catch(err => {
     console.log(err);
  })
}

exports.mongoGettingAll = mongoGettingAll
exports.mongoGetting = mongoGetting
exports.mongoConnecting = mongoConnecting
exports.getDb = getDb
exports.deleteById = deleteById

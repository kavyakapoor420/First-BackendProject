const mongoose=require('mongoose')
const initData=require('./data.js')
const Listings = require('../Models/Listings')

const MongoDb_url="mongodb+srv://kavya:Oreokapoor412@cluster0.7iw9x.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster0"

//connect with db
async function main(){
    await mongoose.connect(MongoDb_url)
}

main().then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err)
})

const initDb=async()=>{
    // await Listings.deleteMany({})
    await Listings.insertMany(initData.data)

    console.log('db initialized')
}

initDb()
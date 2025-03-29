const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const methodOverride=require('method-override')
const Listings = require('./Models/Listings')

const app=express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

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

//index route 
app.get('/listings',async(req,res)=>{
    const allListings=await Listings.find({})
     res.render('Listings/index.ejs',{allListings})
})

//root route
app.get('/',(req,res)=>{
    res.send('hi i m root')
})

app.listen(3000,()=>{
    console.log('app is running on port 3000')
})

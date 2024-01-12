
const { log } = require('console')
let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
const { get } = require('https')

let app = express()

app.set('view engine' , 'ejs')
app.set('views' , 'views')

exports.myProducts = [
    {id : 1 , src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' , title : 'انگولار' , description : 'تنها فریمورک جاواسکریپت برای توسعه فرانت اند'},
    {id : 2 , src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png' , title : 'نود جی اس' , description : 'نود جی اس محیط ران تایم برای توسعه بک اند می باشد'},
]
const loginPage = require('./controller/login')
const productPage = require('./controller/product')
const armanPage = require('./controller/arman')

app.use(bodyParser.urlencoded({extended : false}))


app.use('/',(req,res,next)=>{
    
    console.log('hello from express1')
    next()
    
})
// app.get('/login',(req,res,next)=>{
    
//     res.render('login.pug' ,{docTitle : 'login'})

// })

app.get('/login',loginPage.getLogin)

// app.get('/login',(req,res,next)=>{
    
//     res.render('login.ejs' ,{docTitle : 'login'})

// })

// app.use((req,res,next)=>{
    
//     console.log(req.body)
//     res.sendFile(path.join(__dirname,'views','arman.html'))
//     // res.redirect('/')
// })

app.get('/product',productPage.getProduct)

app.use('/arman',armanPage.getArmanTemplate)

app.listen(3000)


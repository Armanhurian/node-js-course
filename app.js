
const { log } = require('console')
let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
const { get } = require('https')

let app = express()

app.set('view engine' , 'ejs')
app.set('views' , 'views')

const loginPage = require('./controller/login')
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

app.use('/arman',armanPage.getArmanTemplate)

app.listen(3000)


exports.getLogin = (req,res,next) =>{
    res.render('login', 
        {docTitle : 'login'}
    )
}
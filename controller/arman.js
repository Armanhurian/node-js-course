
exports.getArmanTemplate = (req,res,next) => {
    
    console.log(req.body)
    // res.sendFile(path.join(__dirname,'views','arman.html'))
    res.render('arman', 
    {docTitle : 'arman'}
    )
    // res.redirect('/')
}


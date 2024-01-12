const { myProducts } = require("../app")

exports.getProduct = (req , res , next) => {
    res.render('product', 
    {docTitle : 'product' , product : myProducts},
    )
}
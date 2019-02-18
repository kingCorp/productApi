const mongoose = require('mongoose');
const ProductModel = require('../model/productModel');

//get products
exports.product_get_all = (req, res, next) => {
    ProductModel.find().select('_id','name','price')
    .exec()
    .then(docs =>{
        res.status(200).json({
            count: docs.length,
            product: docs
        });
    })
    .catch(err=>{
        res.status(409).json(err)
    })
}

//get single product
exports.product_get_single = (req, res, next) => {

}

//post product
exports.product_create = (req, res, next) => {
    const myProduct = new ProductModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        color: req.body.color
    });

    myProduct.save()
        .then(result => {
            res.status(200).json({
                message: 'Product saved',
                product: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err,
                message: 'Could not save'
            });
        });
}
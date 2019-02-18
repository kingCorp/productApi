const express = require('express');
const router = express.Router();
const Product = require('../controllers/product');

//routes

//get all
router.get('/', Product.product_get_all);

//get single
router.get('/:id', Product.product_get_single);

//post all
router.post('/', Product.product_create);


module.exports = router;
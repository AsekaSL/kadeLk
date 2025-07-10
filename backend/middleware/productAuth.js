const Product = require('../module/Product.js');

const productAuth = async (req, res, next) => {
    const {productId, itemId} = req.body;

    if(!productId) {
        return res.send({success: false, message: "Missing details"});
    }

    try {

        const product = await Product.findById(productId);

        if (!product) {
            return res.send({success: false, message: "Product not found"});
        }

        

        if(product.variations.length == 0) {
            req.body.items = {productId, title: product.title, price: product.price, image: product.image};
            return next();
        }

        const item = product.variations.filter(item => {
            if(item._id == itemId ) {
                return item;
            }
        });

        req.body.items = [{productId, title: product.title,size: item[0].size, color: item[0].color, price: item[0].price, image: item[0].image, _id: item[0]._id}];
        
        return next();

    } catch (error) {
        return res.send({success: false, message: error.message});
    }
};

module.exports = productAuth;
const Product = require('../module/Product');

const readProduct = async (req, res) => {
    const {productId} = req.body;
    
    try{
        const product = await Product.findById(productId);
        product ? res.send({success: true, product}) : res.send({success: false, message: "Invalid product"});
    }catch(error) {
        res.send({success: false, message: error.message});
    }

}

const createProduct = async (req, res) => {
    const { title, description, category,brand, rating, variations,  stockQuantity, vendorId} = req.body;
    const product = new Product({ title, description, category,brand, rating, variations,  stockQuantity, vendorId});

    try {
        const response = await product.save();

        if(response) {
            res.send({success: true});
        }else {
            res.send({success: false});
        }
    } catch (error) {
        res.send({success: false, message: error.message});
    }

}

const updateProduct = async (req, res) => {
        const { productId, title, description, category,brand, rating, variations,  stockQuantity, vendorId} = req.body;

        try{
            const response = await Product.updateOne({_id: productId}, 
            {$set: {title, description, price, category, brand, rating, variations, stockQuantity, vendorId}});

            if(response) {
                res.send({success: true});
            }else {
                res.send({success: false, message: "Error updating"})
            }
        }catch(error) {
            res.send({success: false, message: error.message});
        }
        
}

const deleteProduct = async (req, res) => {

    const {productId} = req.body;

    try {
        const response = await Product.deleteOne({_id: productId});

        if(response) {
            res.send({success: true, message: "Succssfully deleted"});
        }else {
            res.send({success: false, message: "Error updating"})
        }

    } catch (error) {
        res.send({success: false, message: error.message});
    }
}

exports.createProduct = createProduct;
exports.readProduct = readProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
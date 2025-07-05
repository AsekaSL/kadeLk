const Product = require('../module/Product');

const readProduct = () => {
    return new Promise((resolve, reject) => {
        Product.find()
        .then(response => resolve(response))
        .catch(error => reject(error));
    })
};

// const createProduct = (req) => {
//     return new Promise((resolve, reject) => {
//         const product = new Product({
//             productId: req.productId,
//             title: req.title,
//             description: req.description,
//             price: req.price,
//             category: req.category,
//             brand: req.brand,
//             rating: req.rating,
//             stockQuantity: req.stockQuantity,
//             vendorId: req.vendorId
//         });

//         product.save()
//         .then((response) => {
//             resolve(response);
//         })
//         .catch((error) => {
//             reject(error);
//         });

//     })
// }

const createProduct = async (req, res) => {
    const {productId, title, description, price, category,brand, rating, variations,  stockQuantity, vendorId} = req.body;
    const product = new Product({productId, title, description, price, category,brand, rating, variations,  stockQuantity, vendorId});

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

const updateProduct = (req) => {
    return new Promise((resolve, reject) => {
        Product.updateOne({productId: req.productId}, 
            {$set: {title: req.title, description: req.description, price: req.price, category: req.category, brand: req.brand, rating: req.rating}})
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error);
        })
    })
}

const deleteProduct = (req) => {
    return new Promise((resolve, reject) => {
        Product.deleteOne({productId: req.prdocutId})
        .then(response => {
            resolve(response);
        })
        .catch(error => 
            reject(error)
        )
    })
}

exports.createProduct = createProduct;
exports.readProduct = readProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
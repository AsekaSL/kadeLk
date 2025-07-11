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
    const { title, description, category,brand, rating,  stockQuantity, vendorId} = req.body;

    let variations = [];
    let mainImage = '';

    // If no variations — simple product
    if (!req.body.variations) {
        const imageFile = req.files.find(f => f.fieldname === 'image');
        mainImage = imageFile?.path || '';
    } else {
        // Parse variations
        variations = JSON.parse(req.body.variations);

        req.files.forEach(file => {
        const match = file.fieldname.match(/image_(\d+)/);
        if (match) {
            const index = parseInt(match[1]);
            if (variations[index]) {
            variations[index].image = file.path; // Add Cloudinary URL
            }
        }
        });
    }

    const product = new Product({ title, description, category,brand, rating, image: mainImage ,variations,  stockQuantity, vendorId});

    try {
        const response = await product.save();

        if(response) {
            return res.send({success: true});
        }else {
            return res.send({success: false});
        }
    } catch (error) {
        return res.send({success: false, message: error.message});
    }

};

const updateProduct = async (req, res) => {

        const { productId, title, description,price, category,brand, rating,  stockQuantity, vendorId} = req.body;

        try{

            let variations = [];
            let mainImage = '';

            // If no variations — simple product
            if (!req.body.variations) {
                const imageFile = req.files.find(f => f.fieldname === 'image');
                mainImage = imageFile?.path || '';
            } else {
                // Parse variations
                variations = JSON.parse(req.body.variations);

                req.files.forEach(file => {
                const match = file.fieldname.match(/image_(\d+)/);
                if (match) {
                    const index = parseInt(match[1]);
                    if (variations[index]) {
                    variations[index].image = file.path; // Add Cloudinary URL
                    }
                }
                });
            }

            let product = await Product.findById(productId);

            if(!product) {
                return res.send({success: false, message: "Product not defiened!"});
            }

            Object.assign(product, {
            title,
            description,
            price,
            image: mainImage,
            category,
            brand,
            rating,
            variations,
            stockQuantity,
            vendorId,
            });

            const response = await product.save();

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
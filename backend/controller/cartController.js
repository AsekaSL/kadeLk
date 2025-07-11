const Cart = require('../module/Cart');

const addCart = async (req, res) => {

    const {customerId, items, lastUpdated} = req.body;
    
    try{

        const cart = await Cart.findOne({customerId});

        if(!cart) {
            const newCart = new Cart({
                customerId,
                items,
                lastUpdated
            });

            const response = await newCart.save();

            return res.send({success: true, message: "Succsfully add to Cart", response});
        }

        const existingItem  = cart.items.find(item => String(item._id) == items[0]._id);
        
        if(existingItem) {
            existingItem.quantity ++;
            await cart.save();
            return res.send({success: true});
        }
        
        cart.items.push(items[0]);
        await cart.save();

        return res.send({success: true});

    } catch (error) {
        return res.send({success: false, message: error.message});
    }

};

const getCart = async (req, res) => {

    const {customerId} = req.body;

    try {
        
        const cart = await Cart.findOne({customerId});

        if (!cart) {
            return res.send({success: false, message: "Cart not found"});
        }

        return res.send({success: true, cart});

    } catch (error) {
        return res.send({success: false, message: error.message});
    }

};

const deleteCart = async (req, res) => {
    const {customerId} = req.body;

    try {
        const response = await Cart.deleteOne({customerId});

        if(response) {
            res.send({success: true, message: "Succssfully deleted"});
        }else {
            res.send({success: false, message: "Error updating"})
        }

    } catch (error) {
        res.send({success: false, message: error.message});
    }
};

exports.addCart = addCart;
exports.getCart = getCart;
exports.deleteCart = deleteCart;
const Vendor = require('../module/Vendor');


const addVendor = (req) => {
    return new Promise((resolve, reject) => {
        const vendor = new Vendor({
            vendorId: req.vendorId,
            companyName: req.companyName,
            contactName: req.contactName,
            email: req.email,
            phone: req.phone,
            address: {
                line: req.address.line,
                city: req.address.city,
                postalCode: req.address.postalCode,
                country: req.address.country
            }
        });

        vendor.save()
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error)
        })
    })
};

const getVendor = ((req) => {
    return new Promise((resolve, reject) => {
        Vendor.find()
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    })
})

const updateVendor = ((req) => {
    return new Promise((resolve, reject) => {
        Vendor.updateOne({vendorId: req.vendorId},
             {$set: {
            companyName: req.companyName,
            contactName: req.contactName,
            email: req.email,
            phone: req.phone,
            address: {
                line: req.address.line,
                city: req.address.city,
                postalCode: req.address.postalCode,
                country: req.address.country
            }}})
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error);
            })
    })
});


const deleteVendor = (req) => {
    return new Promise((resolve, reject) => {
        Vendor.deleteOne({vendorId: req.vendorId})
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error);
        })
    })
}

exports.addVendor = addVendor;
exports.getVendor = getVendor;
exports.updateVendor = updateVendor;
exports.deleteVendor = deleteVendor;
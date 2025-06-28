const Customer = require('../module/Customer');

const saveCustomer = (req) => {
    return new Promise((resolve, reject) => {
        const customer = new Customer({
            customerId: req.customerId,
            name: req.name,
            email: req.email,
            phone: req.phone,
            address: {
                line: req.address.line,
                city: req.address.city,
                postalCode: req.address.postalCode,
            },
            registeredDate: req.registeredDate
        });

        customer.save()
        .then(response => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        });
    })
}

const readCustomers = () => {
    return new Promise((resolve, reject) => {
        Customer.find()
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })
    })
}

const readCustomer = (req) => {
    return new Promise((resolve, reject) => {
        Customer.findOne({customerId: req.customerId})
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error)
        })
    })
}

const updateCustomer = (req) => {
    return new Promise((resolve, reject) => {
        Customer.updateOne({customerId: req.customerId}, 
            {$set: {name: req.name, email: req.email,phone: req.phone, address: {
                line: req.address.line,
                city: req.address.city,
                postalCode: req.address.postalCode
            }, registeredDate: req.registeredDate}})
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const deleteCustomer = (req) => {
    return new Promise((resolve,reject) => {
        Customer.deleteOne({customerId: req.customerId})
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        })
    })
}

exports.saveCustomer = saveCustomer;
exports.readCustomers = readCustomers;
exports.readCustomer = readCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
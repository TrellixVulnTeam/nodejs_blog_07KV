const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev');
        console.log('Ket noi MongoDB');
    } catch (error) {
        console.log('Loi ket noi MongoDB');
    }
}

module.exports = { connect };

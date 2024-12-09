const mongoose = require('mongoose');


const connectDatabase = async () => {
    try {
        const uri = process.env.DB_URI || 'mongodb+srv://user-1:shahulyaalh@cluster0.t1nv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ecommerce';
        await mongoose.connect(uri);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err.message || err);
    }
};

module.exports = connectDatabase;

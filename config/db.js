// MongoDB connection logic
const mongoose= require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/The-Vault', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
}

module.exports = connectDb;
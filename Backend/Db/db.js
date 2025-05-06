const mongoose = require('mongoose');

const connectDB = async function () {
    try {
        // Get MongoDB URI from environment variable or fallback to localhost
        const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/schoolMangeMentSystem';
        // Connect to MongoDB with options to avoid deprecation warnings
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,   // For MongoDB URI parsing
            useUnifiedTopology: true, // For monitoring MongoDB server changes
        });
        console.log('✅ Connected to MongoDB!');
    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err.message);
        // Optionally, exit process in case of critical error
        process.exit(1);
    }
};

module.exports = connectDB;

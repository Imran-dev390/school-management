//  const mongoose = require('mongoose');

//  const connectDB = async function () {
//      try {
//          // Get MongoDB URI from environment variable or fallback to localhost
//       //   if(process.env.production){
//          const dbURI = process.env.MONGO_URI;
//          // Connect to MongoDB with options to avoid deprecation warnings
//          await mongoose.connect(dbURI, {
//              useNewUrlParser: true,   // For MongoDB URI parsing
//              useUnifiedTopology: true, // For monitoring MongoDB server changes
//          });
//          console.log('✅ Connected to MongoDB for Production!');
//      //} else if (process.env.development) {
//             //    const dbURI = process.env.MONGO_URI1;
//      //    Connect to MongoDB with options to avoid deprecation warnings
//         //  await mongoose.connect(dbURI, {
//             //  useNewUrlParser: true,   // For MongoDB URI parsing
//             //  useUnifiedTopology: true, // For monitoring MongoDB server changes
//         //  });
//         //  console.log('✅ Connected to MongoDB for development!');
//    //  }
//      } catch (err) {
//          console.error('❌ Error connecting to MongoDB:', err.message);
//          // Optionally, exit process in case of critical error
//          process.exit(1);
//      }
//  };

//  module.exports = connectDB;












































 const mongoose = require('mongoose');
 const connectDB = async function () {
     try {
         let dbURI;
         const env = process.env.NODE_ENV || "development";
          if (env === 'production') {
              dbURI = process.env.MONGO_URI2;
              console.log('✅ Connecting to MongoDB for Production...');
          } else if (env === 'development') {
              dbURI = process.env.MONGO_URI1;
              console.log('✅ Connecting to MongoDB for Development...');
          } else {
              throw new Error('❌ Unknown NODE_ENV value. Please set NODE_ENV to "production" or "development".');
          }
          await mongoose.connect(dbURI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
          });
          console.log('✅ MongoDB connection successful!');
      } catch (err) {
          console.error('❌ Error connecting to MongoDB:', err.message);
          process.exit(1);
      }
  };
  module.exports = connectDB;
 



























// const mongoose = require('mongoose');
// const connectDB = async function () {
//     try {
//         let dbURI;
//       //  const env = process.env.NODE_ENV || 'development'; // 👈 Default to development if not set

//         if (env === 'production') {
//             dbURI = process.env.MONGO_URI2;
//             console.log('✅ Connecting to MongoDB for Production...');
//         } else if (env === 'development') {
//             dbURI = process.env.MONGO_URI1;
//             console.log('✅ Connecting to MongoDB for Development...');
//         } else {
//             throw new Error(`❌ Unknown NODE_ENV value: "${env}". Please set NODE_ENV to "production" or "development".`);
//         }

//         await mongoose.connect(dbURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('✅ MongoDB connection successful!');
//     } catch (err) {
//         console.error('❌ Error connecting to MongoDB:', err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

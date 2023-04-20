const mongoose = require('mongoose');
 
const connectDb = async () => {
    try {
      const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(connection.connection.host);
    } catch(err: any) {
      console.log(err.message);
    }
};
module.exports = connectDb;

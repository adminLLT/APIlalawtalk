const mongoose = require('mongoose') ;

const uri = 'mongodb://127.0.0.1:27017/lalawtalk';

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}
connect();
import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', () =>
    console.log('Database connected successfully')
  );
  mongoose.connection.on('error', (err) =>
    console.log('Database connection failed', err)
  );
  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
};

export default connectDB;

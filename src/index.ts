import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import configRoutes from './routes/widgetConfigRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('DB Connection Error:', error));

app.use('/api/v1', configRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

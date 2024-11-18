import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import your controller functions
import { getAllConfigs, saveWidgetConfig, getWidgetByID } from './controllers/WidgetConfigController';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('DB Connection Error:', error));

// Define routes
app.get('/api/v1/config', getAllConfigs);
app.post('/api/v1/configsave', saveWidgetConfig);
// app.get('/api/v1/config/:widgetId', getWidgetByID);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

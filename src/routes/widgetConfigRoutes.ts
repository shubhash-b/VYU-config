import express from 'express';
import { getAllConfigs, saveWidgetConfig, getWidgetByID} from '../controllers/WidgetConfigController';

const router = express.Router();

router.get('/config', getAllConfigs);
router.post('/config', saveWidgetConfig);
router.get('/config/:widgetId', getWidgetByID);

export default router;

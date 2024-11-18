import { Request, Response } from 'express';
import WidgetConfig from '../models/WidgetConfig';

// Fetch all widget configurations
export const getAllConfigs = async (req: Request, res: Response) => {
  try {
    const configs = await WidgetConfig.find();
    res.status(200).json(configs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching configurations', error });
  }
};

// Save widget configuration
export const saveWidgetConfig = async (req: Request, res: Response) => {
  try {
    const { widgetId,widgetName, dataSource, rule } = req.body;
    //const widgetId = `widget-${Date.now()}`; // Unique WidgetID generation

    const newConfig = new WidgetConfig({
      widgetId,
      widgetName,
      dataSource,
      rule,
    });

    await newConfig.save();
    res.status(201).json({ message: 'Widget configuration saved', widgetId });
  } catch (error) {
    res.status(500).json({ message: 'Error saving widget configuration', error });
  }
};

// Fetch a widget by WidgetID
export const getWidgetByID = async (req: Request, res: Response) => {
  try {
    const { widgetId } = req.params;
    const config = await WidgetConfig.findOne({ widgetId });

    if (!config) {
      return res.status(404).json({ message: 'Widget not found' });
    }

    res.status(200).json(config);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching widget by ID', error });
  }
};

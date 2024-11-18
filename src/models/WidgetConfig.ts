import mongoose, { Schema, Document } from 'mongoose';

interface WidgetConfigDocument extends Document {
  widgetId: string;
  widgetName: string;
  videoSource: string;
  rule: string;
}

const widgetConfigSchema = new Schema<WidgetConfigDocument>({
  widgetId: { type: String, required: true },
  widgetName: { type: String, required: true },
  dataSource: { type: String, required: true },
  rule: { type: String, required: true },
});

const WidgetConfig = mongoose.model<WidgetConfigDocument>('WidgetConfig', widgetConfigSchema);
export default WidgetConfig;

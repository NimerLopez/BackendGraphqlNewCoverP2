import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const newSchema = new Schema({
  title: { type: String },
  short_description: { type: String },
  permalink: { type: String },
  date: { type: String },
  src:{ type: String },
  new_source_id: { type: String },
  user_id: { type: String, required: true },
  category_id: { type: String, required: true },
});
export const newModel = mongoose.model('news', newSchema);

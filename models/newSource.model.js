import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const newSourceSchema = new Schema({
    url: { type: String },
    name: { type: String },
    category_id: { type: String, required: true },
    user_id: { type: String, required: true }
});
export const newSourceModel = mongoose.model('newsources', newSourceSchema);
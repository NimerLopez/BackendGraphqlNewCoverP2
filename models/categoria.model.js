import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const categoriesSchema = new Schema({
    name: { type: String },
});
export const categoriaModel = mongoose.model('Categories', categoriesSchema);
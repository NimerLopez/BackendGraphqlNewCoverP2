import{categoriaModel} from "../models/categoria.model.js"
export const getCategories = async function(){
    try {
      const cate = await categoriaModel.find();
      if (cate) {
        return cate;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
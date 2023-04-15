import{newModel} from "../models/new.model.js"
export const getNew = async function(id){//get all new by user id
  console.log(id);
    try {
      const news = await newModel.find({ user_id:id });
      if (news) {
        return news;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
  export const getMyNewByCategory = async function(id_Categoria,user_id){
    console.log(id_Categoria);
    console.log(user_id);

      try {
        const news = await newModel.find({  user_id: user_id, category_id: id_Categoria });
        if (news) {
          return news;
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    }
    export const getMyNewSearch= async function(valor,user_id){
      console.log(valor);
        try {
          const news = await newModel.find({  
            user_id: user_id, 
            $or: [
              { title: { $regex: valor, $options: "i" } },
              { short_description: { $regex: valor, $options: "i" } },
            ],
          
          });
          if (news) {
            return news;
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }
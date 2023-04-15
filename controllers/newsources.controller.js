import{newSourceModel} from "../models/newSource.model.js"
export const getNewSoruce = async function(id){//get all new by user id
  console.log(id);
    try {
      const news = await newSourceModel.find({ user_id:id });
      if (news) {
        return news;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
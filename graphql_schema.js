// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

 
  type New {
    _id: String
    title: String
    short_description: String
    permalink: String
    date:String
    new_source_id:String
    user_id:String
    src:String
    category_id:String
  }
  type newsources {
    _id: String
    url: String
    name: String
    category_id: String
    user_id:String
  }
  type Categorias {
    _id: String
    name:String
  }


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "players" query returns an array of zero or more players (defined above).
  type Query {
    dataNewByUserID(id:String):[New]
    MyNewsByFilCate(id_Categoria:String,user_id:String):[New]
    MyNewsSearch(valor:String,user_id:String):[New]
    MyNewsSource(id:String):[newsources]

    Categorias:[Categorias]
    version: String
  }
`;
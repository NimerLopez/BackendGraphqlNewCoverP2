import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql_schema.js';
import mongoose from 'mongoose';
import { getNew,getMyNewByCategory,getMyNewSearch } from './controllers/new.controller.js';
import { getCategories } from './controllers/categories.controller.js';
import { getNewSoruce } from './controllers/newsources.controller.js';


const db = mongoose.connect("mongodb://127.0.0.1:27017/ProyectoISW711", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Conected to mongodb')).catch((error) => console.error(error));

//npm i @apollo/server graphql mongoose nodemon
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    dataNewByUserID:async(parent,args,context,info)=>{
      let news = await getNew(args.id);
      return news;
    },
    Categorias:async()=>{
      let categories = await getCategories();
      return categories;
    },
    MyNewsByFilCate:async(parent,args,context,info)=>{
      let news = await getMyNewByCategory(args.id_Categoria,args.user_id);
      return news;
    },
    MyNewsSearch:async(parent,args,context,info)=>{
      let news = await getMyNewSearch(args.valor,args.user_id);
      return news;
    },
    MyNewsSource:async(parent,args,context,info)=>{
      let source = await getNewSoruce(args.id);
      return source;
    },
    version: () => "2.2"
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});
console.log(`🚀  Server ready at: ${url}`);
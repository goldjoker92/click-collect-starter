import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";//On connecte Appolo pour récupérer les clients
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:2021/graphql",//On lie notre Apolloclient au graphql
  cache: new InMemoryCache(),
});

ReactDOM.render(

  < BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client ={client} > //Et le mets dans le context
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

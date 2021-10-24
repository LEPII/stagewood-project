import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";
import "../src/styles/index.css";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


ReactDOM.render(
    <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    </BrowserRouter>,
  document.getElementById("root")
);

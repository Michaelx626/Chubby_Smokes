import React from "react";
import Landing from './pages/LandingPage/index';
import Login from "./pages/LoginPage/index";
import SignUp from './pages/SignUpPage/index';
import Header from './components/Header/index';
import Warnings from './components/Warning/index';
import Footer from './components/Footer/index';
import AllVapesProduct from "./pages/VapesPage";
import AllJuicesProduct from './pages/JuicesPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Warnings />
          <Header />
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/vapes' element={<AllVapesProduct />}/>
            <Route path='/juices' element={<AllJuicesProduct />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

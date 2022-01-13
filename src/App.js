import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Pages/Home/Home";
import Buy from "../src/components/Pages/Buy/Buy";
import Rent from "../src/components/Pages/Rent/Rent";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
          </Routes>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;

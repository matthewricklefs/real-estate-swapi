import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/components/Pages/Home/Home";
import Buy from "../src/components/Pages/Buy/Buy";
import Rent from "../src/components/Pages/Rent/Rent";
import Property from "../src/components/Pages/Property/Property";
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
            <Route
              path="*"
              element={
                <main>
                  <Navbar />
                  <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                    404 Not Found
                  </h1>
                </main>
              }
            />

            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/property">
              <Route path=":propertyId" element={<Property />} />
            </Route>
          </Routes>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;

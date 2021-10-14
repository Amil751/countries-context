import CountryList from "./components/countries/CountryList";
import Navbar from "./components/navigation/Navbar";
import { BorderContext } from "./context/context";
import { useContext } from "react";
import "./App.css";
import { Route } from "react-router";
import SearchPage from "./components/Pages/SearchPage";
import CountryDetail from "./components/countries/CountryDetail";
const App = () => {
  const a = useContext(BorderContext);
  console.log("app component", a.countries);
  return (
    <div className="main">
      <div className="App">
        <Navbar />
        <Route path="/search">
         <SearchPage/>
        </Route>
        <Route path='/' exact>
          <CountryList />
        </Route>
        <Route path="/detail">
          <CountryDetail/>
        </Route>
      </div>
    </div>
  );
};

export default App;

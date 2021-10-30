import CountryList from "./components/countries/CountryList";
import Navbar from "./components/navigation/Navbar";
import "./App.css";
import { Route } from "react-router";
import SearchPage from "./components/Pages/SearchPage";
import CountryDetail from "./components/Pages/CountryDetail";
const App = () => {
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
        <Route path="/detail/:ID">
          <CountryDetail/>
        </Route>
      </div>
    </div>
  );
};

export default App;

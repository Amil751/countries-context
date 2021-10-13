import CountryList from "./components/countries/CountryList";
import Navbar from "./components/navigation/Navbar";
import { BorderContext } from "./context/context";
import { useContext } from "react";
import "./App.css";
const App = () => {
  const a=useContext(BorderContext);
  console.log("app component",a.countries);
  return (
    <div className="main">
      <div className="App">
        <Navbar />
        <CountryList />
      </div>
    </div>
  );
};

export default App;

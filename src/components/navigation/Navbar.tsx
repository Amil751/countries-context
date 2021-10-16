import Search from "./search/Search";
import classes from "./Navbar.module.css";
import Sort from "./sort/Sort";
import Filter from "./filter.tsx/Filter";
import { BorderContext } from "../../context/context";
import { useContext } from "react";
const Navbar = () => {
  const global = useContext(BorderContext);
  return (
    <div className={classes.main_nav}>
      <h3>ALL countries</h3>
      {global.show && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "15%",
          }}
        >
          <Sort />
          <Filter />
        </div>
      )}
      <Search />
    </div>
  );
};

export default Navbar;

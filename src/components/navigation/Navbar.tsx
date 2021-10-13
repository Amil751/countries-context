import Search from "./serachbox/Search";
import classes from "./Navbar.module.css";
import Sort from "./sort/Sort";
import Filter from "./filter.tsx/Filter";

const Navbar = () => {
  return (
    <div className={classes.main_nav}>
      <h3>ALL countries</h3>
      <Sort />
      <Filter />
      <Search />
    </div>
  );
};

export default Navbar;

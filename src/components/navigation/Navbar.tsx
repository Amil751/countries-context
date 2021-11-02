import Search from "../search/Search";
import classes from "./Navbar.module.css";
import Sort from "../sort/Sort";
import Filter from "../filter.tsx/Filter";
import { BorderContext } from "../../context/context";
import { useContext } from "react";
import { Box } from "@material-ui/core";

const Navbar = () => {
  const { visibility } = useContext(BorderContext);
  return (
    <Box className={classes.main_nav}>
      <h3>ALL countries</h3>
      {visibility && (
        <Box className={classes.sort_filter} >
          <Sort />
          <Filter />
        </Box>
      )}
      <Box className={classes.search}>
        <Search />
      </Box>
    </Box>
  );
};

export default Navbar;

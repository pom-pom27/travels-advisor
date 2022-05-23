import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import useStyles from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display={"flex"}>
          <Typography variant="h6" className={classes.title}>
            Explore new place
          </Typography>
          {/* <Autocomplete> */}
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchOutlined />
            </Box>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </Box>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React, { useContext } from "react";
import Link from "next/link";
import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DrawerContext } from "./Layout";

type Props = {
  title: string;
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    margin: 0,
  },
});

const NavBar: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();
  const drawerContext = useContext(DrawerContext);

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <h3>
            <Link href="/">{props.title}</Link>
          </h3>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => {
              drawerContext.setDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

import React from "react";
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const pageLinks = [
  { title: "About", url: "/about" },
  { title: "Skills", url: "/skills" },
  { title: "Work", url: "/work" },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const DrawerContents = () => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>
        {pageLinks.map((page, i) => (
          <ListItem key={i}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <Link href={page.url}>
              <ListItemText primary={page.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerContents;

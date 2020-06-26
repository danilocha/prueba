import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {
  Close,
  Today,
  ArrowUpward,
  ArrowDownward,
  Launch,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ObjectList = (object) => {
  const classes = useStyles();
  const { close, date, high, low, open } = object.object;
  console.log(object);
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Close />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={"close"} secondary={close} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Today />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={"date"} secondary={date} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArrowUpward />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={"high"} secondary={high} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ArrowDownward />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={"low"} secondary={low} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Launch />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={"open"} secondary={open} />
      </ListItem>
    </List>
  );
};

export default ObjectList;

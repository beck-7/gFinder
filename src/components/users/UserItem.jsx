import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

export const UserItem = ({ user }) => {
  const classes = useStyles();

  const { login, avatar_url: avatarUrl } = user;

  return (
    <Card className={classes.card}>
      <CardMedia image={avatarUrl} className={classes.cardMedia} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{login}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link to={`/user/${login}`} className={classes.card} tabIndex={-1}>
          <Button size="small" color="primary" variant="contained">
            More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    margin: "0 auto",
    textAlign: "center",
    paddingTop: 15,
    textDecoration: "none",
  },
  cardMedia: {
    height: 70,
    width: 70,
    borderRadius: "50%",
    margin: "0 auto",
  },
  cardContent: {
    paddingBottom: 0,
  },
  cardActions: {
    paddingTop: 0,
  },
}));

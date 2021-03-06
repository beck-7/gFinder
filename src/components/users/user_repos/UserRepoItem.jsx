import React from "react";
import {
  Link,
  Card,
  CardActions,
  Typography,
  makeStyles,
} from "@material-ui/core";

export const UserRepoItem = ({ userRepo }) => {
  const classes = useStyles();

  const htmlUrl = userRepo.html_url;

  return (
    <Card className={classes.card}>
      <CardActions className={classes.cardActions}>
        <Link
          href={htmlUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.link}
        >
          <Typography variant="h6">{userRepo.name}</Typography>
        </Link>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    padding: 10,
    marginBottom: 20,
  },
  cardActions: {
    paddingLeft: 0,
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: "darkblue",
    },
  },
}));

import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formField: {
    marginTop: "1rem"
  }
});

const Create = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3">Create new issue</Typography>
      <Button variant="contained" color="primary" className={classes.formField}>
        create
      </Button>
    </Container>
  );
};

export default Create;

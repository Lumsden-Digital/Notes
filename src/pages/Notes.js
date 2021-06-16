import React, { useState, useEffect } from "react";
import data from "../data/db";
import { Container, Card, Grid } from "@material-ui/core";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {notes.map((n) => (
          <Grid item key={n.id} xs={12} md={6} lg={4}>
            <Card>{n.title}</Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;

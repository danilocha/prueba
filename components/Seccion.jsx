import React from "react";
import Form from "./Form";
import { Typography, Grid } from "@material-ui/core";

const Seccion = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item md={12}>
        <Typography align={"center"} variant="h4" spacing="5">
          Hola mundo
        </Typography>
      </Grid>
      <Grid justify="center">
        <Form />
      </Grid>
    </Grid>
  );
};

export default Seccion;

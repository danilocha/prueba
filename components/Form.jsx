import React, { useState } from "react";
import Search from "./Search";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const Form = () => {
  const classes = useStyles();
  const [selectedDate, setDateChange] = useState();
  const handleDateChange = (e) => {
    let date = e.target.value.split("-");
    setDateChange({
      year: date[0],
      month: date[1],
      day: date[2],
    });
  };
  const search = selectedDate ? (
    <Search date={selectedDate} />
  ) : (
    "Selecciona una fecha"
  );

  return (
    <Grid item md={12}>
      <form className={classes.container}>
        <TextField
          id="date"
          label="pon una fecha"
          type="date"
          defaultValue="2000-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDateChange}
        />
      </form>
      {search}
    </Grid>
  );
};

export default Form;

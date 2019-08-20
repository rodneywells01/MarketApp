import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: "block"
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [values, setValues] = React.useState({
    name: "Mr. Awesome"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const initLogin = () => {
    var username = values["name"];
    console.log("Attempting Login!");
    console.log(username);
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2>Login</h2>
      <div style={{ display: "block" }}>
        <TextField
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={initLogin}
        >
          Log In
        </Button>
      </div>
    </div>
  );
}

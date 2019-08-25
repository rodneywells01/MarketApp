import React from 'react';

// Styles
import '../../common-styles.css'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ReactDOM from 'react-dom';
import TextField from "@material-ui/core/TextField";
import Particles from 'react-particles-js';
import Login from '../../components/Login';

import { makeStyles } from '@material-ui/core/styles';
import WatchlistView from '../watchlist/WatchlistView';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "100%"
  },
  input: {
    marginBottom: 10,
    color: "white"
  },
  left_view: {
    width: '50%',
    border: "1px solid black"
  }
}));

function SplashPageView() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const renderWatchlist = () => {
    ReactDOM.render(<WatchlistView username="RodneyWells" watchlist_name="my-watchlist"/>, document.getElementById('root'));
  }

  const openLogin = () => {
    // var email =
  }

  // const _handleTextFieldChange: function(e) {
  //   this.setState({
  //       textFieldValue: e.target.value
  //   });
  // }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <div className="flexContainer">
        <div className="left_view">
          <div></div>
          <header className="App-header">
            <Particles className="background" height="900px" params={{
              "particles": {
                  "number": {
                    "value": 150
                  }
              }
            }}></Particles>
            <div className="center-me">
              <h1>Marketly</h1>
              <h4>Curate and Analyze Market Trends</h4>
            </div>
          </header>
        </div>
        <div className="right_view">
          <div>
            <h3>Get Trading</h3>
            <div style={{width: "70%", display: "inline-block"}}>
              <TextField className={classes.input} label="Email"></TextField>
              <TextField className={classes.input} label="Password" type="Password"></TextField>
              <Button variant="contained" color="primary" className={classes.button} onClick={openLogin}>
                Log In
              </Button>
              <br/>
              <Button variant="contained" color="primary" className={classes.button}>
                Sign Up for the Beta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashPageView;

import React from 'react';

// Styles
import '../../common-styles.css'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ReactDOM from 'react-dom';

import Login from '../../components/Login';

import { makeStyles } from '@material-ui/core/styles';
import WatchlistView from '../watchlist/WatchlistView';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 250
  },
  input: {
    display: 'none',
  },
}));

function SplashPageView() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const renderWatchlist = () => {
    ReactDOM.render(<WatchlistView username="RodneyWells" watchlist_name="my-watchlist"/>, document.getElementById('root'));
  }

  const openLogin = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Marketly</h1>
        <h4>Curate and Analyze Market Trends</h4>

        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={openLogin}>
            Log In
          </Button>
          <br/>
          <Button variant="contained" color="primary" className={classes.button}>
            Sign Up for the Beta
          </Button>

        </div>

        <Modal
          open={open}
          onClose={handleClose}
        >
            <Login></Login>
        </Modal>


      </header>
    </div>
  );
}

export default SplashPageView;

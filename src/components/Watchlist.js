import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import WatchlistRow from './WatchlistRow'

class Watchlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            health: "Fetching Data..."
        }
    }

    componentDidMount() {
        //  Perform all Data fetch
        // https://reactjs.org/docs/lists-and-keys.html
        var url = process.env.REACT_APP_SERVER_URL + "/health"
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                health: result.status
              });
            },
            (error) => {
              this.setState({
                health: "Unreachable. Error: " + error ,
              });
            }
          )
      }

    render() {
        return (
            <div>
                <h1>This is your Watchlist</h1>
                <Card>
                    <CardContent>API Status: {this.state.health}</CardContent>
                </Card>
            </div>
        )
    }
}

export default Watchlist

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import WatchlistRow from "./WatchlistRow";

class Watchlist extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      health: "Fetching Data..."
    };
  }

  componentDidMount() {
    //  Perform all Data fetch
    // https://reactjs.org/docs/lists-and-keys.html
    var url =
      process.env.REACT_APP_SERVER_URL +
      `/user/${this.props.username}/watchlists/${this.props.watchlist_name}`;

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            watchlist_name: result.watchlist.watchlist_name
          });

          var watchlist_row = result.watchlist.ticker_list.map(ticker => (
            <WatchlistRow ticker={ticker} />
          ));

          this.setState({ watchlist_vals: watchlist_row });
        },
        error => {
          this.setState({
            health: "Unreachable. Error: " + error
          });
        }
      );
  }

  render() {
    return (
      <div>
        <h1>{this.state.watchlist_name}</h1>
        {this.state.watchlist_vals}
      </div>
    );
  }
}

export default Watchlist;

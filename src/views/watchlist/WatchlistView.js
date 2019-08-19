import React from "react";
import "./Watchlist.css";
import Watchlist from "../../components/Watchlist";

export class WatchlistView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Watchlist
            username={this.props.username}
            watchlist_name={this.props.watchlist_name}
          />
        </header>
      </div>
    );
  }
}

export default WatchlistView;

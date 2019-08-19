import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class WatchlistRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var cardStyle = {
      margin: 10
    };
    return (
      <div>
        <Card style={cardStyle}>
          <CardContent>{this.props.ticker}</CardContent>
        </Card>
      </div>
    );
  }
}

export default WatchlistRow;

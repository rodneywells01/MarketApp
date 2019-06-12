import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Watchlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is your Watchlist</h1>
                <Card>
                    <CardContent>TSLA</CardContent>
                </Card>
            </div>
        )
    }
}

export default Watchlist
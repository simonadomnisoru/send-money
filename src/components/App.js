import React from 'react';
import { Grid, GridItem, Separator } from '../style/app.js';
import Send from './Send';
import History from './History';

class App extends React.PureComponent {
    render() {
        return (
            <Grid>
                <GridItem>
                    <h1>Send Money</h1>
                    <Send />
                </GridItem>
                <Separator />
                <GridItem>
                    <h1>My account</h1>
                    <History />
                </GridItem>
            </Grid>
        );
    }
}

export default App;

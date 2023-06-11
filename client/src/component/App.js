import React, { Component } from "react";
import Header from "./Header";
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Grid>
          <Header />
          {children}
        </Grid>
      </div>
    );
  }
}

export default App;

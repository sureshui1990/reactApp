import React, { Component } from "react";
import Header from "./Header";
import { Grid } from 'react-bootstrap';
import './App.css';
class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Grid>
          <Header />
          {children}
          <footer>
            2023@copy Rights
          </footer>
        </Grid>
      </div>
    );
  }
}

export default App;

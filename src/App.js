import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import buttons from ".//components/buttons";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>   WIN AS MUCH AS YOU CAN !! </h2>
          
        </div>
        
        {/* <div class="mt-2 col-md-12">
        <button type="button" class="btn btn-secondary btn-lg">X         </button>        
        </div> */}

        {/* <div class="mt-3 col-md-12">
        <button type="button" class="btn btn-secondary btn-lg">Y        </button>
         </div> */}

        <Route path="/" exact component={buttons} />
      </Router>
    );
  }
}

export default App;
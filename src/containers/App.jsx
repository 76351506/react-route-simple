import React from "react";
import Scroll from "react-bscroll";
import Header from "comp/layout/header";
import RouterView from "router";
import { BrowserRouter as Router } from "react-router-dom";

import "react-bscroll/lib/react-scroll.css";
import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

class App extends React.Component {
    render() {
        return (<div className="wraper">
            <Header></Header>
            <section className="content">
              <Scroll>
                <Router>
                    <RouterView/>
                </Router>
              </Scroll>
            </section>
        </div>)
    }
}

export default App;
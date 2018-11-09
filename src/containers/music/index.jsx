import React from "react";
import RouteView from "router";

// import { Switch, Route } from "react-router-dom";
// import Rank from "view/music/rank";
// import TopList from "view/music/toplist";
// import Search from "view/music/search";

class Music extends React.Component {
    render() {
        const { routes } = this.props;
        return <div>
             this is Music page
             {/*<Switch>
             	<Route path="/music/rank" component={ Rank }></Route>
             	<Route path="/music/toplist" component={ TopList }></Route>
             	<Route path="/music/search" component={ Search }></Route>
             </Switch>*/}
             <RouteView routes={routes}/>
        </div>
    }
}
export default Music;
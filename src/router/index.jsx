import React from "react";
import RouteMap from "./map";
import RouteConfig from "./routes";

class RouterView extends React.Component {
    render() {
        const { routes } = this.props;
        return <RouteMap routes = {routes ? routes : RouteConfig} />
    }
}

export default RouterView;
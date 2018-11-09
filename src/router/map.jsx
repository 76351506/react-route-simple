import React from "react";
import { Switch, Route } from "react-router-dom";

class RouteMap extends React.Component {
    render() {
        const { routes } = this.props;
        return <Switch>
        	{
        		routes.length && routes.map((itm,ind)=>{
        			return <Route path={itm.path} render={()=>{
        				const Component = itm.component;
                        const Children = itm.children === undefined ? [] : itm.children;
        				return <Component routes={Children}></Component>
        			}} key={ind}></Route>
        		})
        	}
        </Switch>
    }
}

export default RouteMap;
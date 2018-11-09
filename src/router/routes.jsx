import Home from "view/home";
import Music from "view/music";
import Rank from "view/music/rank";
import TopList from "view/music/toplist";
import Search from "view/music/search";

const RouteConfig = [{
    path: "/home",
    component: Home
}, {
    path: "/music",
    component: Music,
    children: [{
        path: "/music/rank",
        component: Rank
    }, {
        path: "/music/toplist",
        component: TopList
    }, {
        path: "/music/search",
        component: Search
    }]
}]

export default RouteConfig;
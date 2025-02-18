import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

const MainRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact></Route>
			<Route component={NotFound}></Route>
		</Switch>
	</BrowserRouter>
);

export default MainRouter;

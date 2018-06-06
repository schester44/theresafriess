import React, { Component } from "react"
import { Route } from "react-router-dom"

import Home from "./containers/Home"
import images from "./images.js"

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="header">
					<h1>Theresa Friess</h1>
					<span>theresalfriess@gmail.com</span>
				</div>

				<div style={{ margin: "0 auto", width: "100%" }}>
					<Route exact path="/" render={() => <Home images={images} />} />
				</div>
			</React.Fragment>
		)
	}
}

export default App

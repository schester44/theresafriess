import React, { Component } from "react"
import { Route } from "react-router-dom"

import Image from "../components/Image"
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
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						{JSON.stringify(images)}
						{images.map((image, index) => <Image image={image} iKey={index} key={index} />)}
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default App

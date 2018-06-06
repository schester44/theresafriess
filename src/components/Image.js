import React, { PureComponent } from "react"
import "intersection-observer" // optional polyfill
import Observer from "@researchgate/react-intersection-observer"

class Image extends PureComponent {
	state = {
		isLoaded: false
	}

	handleIntersection = event => {
		if (event.isIntersecting) {
			this.setState({ isLoaded: true })
		}
	}

	render() {
		const { image, iKey } = this.props
		const { isLoaded } = this.state

		const options = {
			onChange: this.handleIntersection,
			root: `image-${iKey}`,
			rootMargin: "0%"
		}

		return (
			<div
				id={`image-${iKey}`}
				style={{
					height: !isLoaded ? "80vw" : "auto",
					padding: 10,
					width: "100%",
					textAlign: "center"
				}}
			>
				<Observer {...options}>
					{this.state.isLoaded ? (
						<div>
							<img style={{ maxWidth: "100%" }} src={image.original} alt={image.title || "Theresa Friess art"} />
							{image.description}
						</div>
					) : (
						<span />
					)}
				</Observer>
			</div>
		)
	}
}

export default Image

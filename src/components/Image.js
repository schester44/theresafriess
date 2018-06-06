import React from "react"

const Image = ({ image }) => {
	return (
		<div style={{ padding: 10, width: "100%", textAlign: "center" }}>
			<img style={{ maxWidth: "100%" }} src={image.original} alt={image.title || "Theresa Friess art"} />
			{image.description}
		</div>
	)
}

export default Image

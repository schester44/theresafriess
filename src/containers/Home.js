import React from "react"

import Image from "../components/Image"

const Home = ({ images }) => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			{images.map((image, index) => <Image image={image} key={index} />)}
		</div>
	)
}

export default Home

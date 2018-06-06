import React from "react"

import Image from "../components/Image"

const Home = ({ images }) => {
	window.images = images
	console.log('[Home]', images);
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
		{JSON.stringify(images)}	
			{images.map((image, index) => <Image image={image} iKey={index} key={index} />)}
		</div>
	)
}

export default Home

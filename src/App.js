/** @format */

import React from "react"
import Hands from "./hands"

function App() {
	return (
		<div
			style={{ height: window.innerHeight }}
			className="flex w-full h-full justify-center items-center bg-black"
		>
			<div
				style={{ backgroundColor: "#C4C4C4" }}
				className="w-52 h-52 rounded-full flex flex-col justify-between p-2 items-center"
			>
				<p className="">12</p>
				<div className="flex justify-between w-full items-center">
					<Hands />
					<p>9</p>
					<div className="w-3 h-3 rounded-full bg-white " />
					<p>3</p>
				</div>
				<p>6</p>
			</div>
		</div>
	)
}

export default App

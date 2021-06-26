/** @format */

import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
	const date = new Date()
	const [clockHand, setClockHand] = useState({
		secondHand: date.getSeconds() * 6,
		minuteHand: date.getMinutes() * 6,
		hourHand: date.getHours() * 30,
	})

	useEffect(() => {
		const date = new Date()

		setTimeout(
			() =>
				setClockHand({
					secondHand: date.getSeconds() * 6,
					minuteHand: date.getMinutes() * 6,
					hourHand: date.getHours() * 30,
				}),
			1000
		)
	}, [clockHand])

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
					<div
						className="w-1 h-28  absolute bg-white "
						style={{
							transform: `translate(95px) rotate(${clockHand.hourHand}deg)`,
							background: "linear-gradient(#ffffff 52%,transparent 45%)",
						}}
					/>
					<div
						className="w-1 h-32  absolute bg-white "
						style={{
							transform: `translate(95px) rotate(${clockHand.minuteHand}deg)`,
							background: "linear-gradient(#ffffff 52%,transparent 45%)",
						}}
					/>
					<div
						className="w-1 h-32  absolute "
						style={{
							transform: `translate(95px) rotate(${clockHand.secondHand}deg)`,
							background: "linear-gradient(red 52%,transparent 45%)",
						}}
					/>
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

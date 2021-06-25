/** @format */

import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
	const date = new Date()
	const [hands, setHands] = useState({
		second: date.getSeconds() * 6,
		minute: date.getMinutes() * 6,
		hour:
			date.getHours() >= 12
				? (date.getHours() - 12) * 30
				: date.getHours() * 30,
	})
	useEffect(() => {
		let newDate = new Date()
		setTimeout(() => {
			setHands({
				second: newDate.getSeconds() * 6,
				minute: newDate.getMinutes() * 6,
				hour:
					newDate.getHours() >= 12
						? (newDate.getHours() - 12) * 30
						: newDate.getHours() * 30,
			})
		}, 1000)
		// }
	}, [hands])
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
						className="w-1 h-28  absolute "
						style={{
							transform: `translate(95px) rotate(${hands.hour}deg)`,
							background: "linear-gradient(#ffffff 52%,transparent 45%)",
						}}
					/>
					<div
						className="w-1 h-32  absolute "
						style={{
							transform: `translate(95px) rotate(${hands.minute}deg)`,
							background: "linear-gradient(#ffffff 52%,transparent 45%)",
						}}
					/>
					<div
						className="w-1 h-32 absolute "
						style={{
							transform: `translate(95px) rotate(${hands.second}deg)`,
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

/**	: minuteHand.z > 117
					? minuteHand.z > 235
						? minuteHand.z % 4 === 0
							? minuteHand.x + 0.7
							: minuteHand.x
						: minuteHand.z % 4 === 0
						? minuteHand.x - 1.7
						: minuteHand.x */

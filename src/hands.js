/** @format */

import React, { useState, useEffect } from "react"

const Hands = () => {
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

	const hands = [
		{
			className: "w-1 h-32  absolute",
			style: {
				transform: `translate(95px) rotate(${clockHand.secondHand}deg)`,
				background: "linear-gradient(red 52%,transparent 45%)",
			},
		},
		{
			className: "w-1 h-28  absolute bg-white ",
			style: {
				transform: `translate(95px) rotate(${clockHand.hourHand}deg)`,
				background: "linear-gradient(#ffffff 52%,transparent 45%)",
			},
		},
		{
			className: "w-1 h-32  absolute bg-white ",
			style: {
				transform: `translate(95px) rotate(${clockHand.minuteHand}deg)`,
				background: "linear-gradient(#ffffff 52%,transparent 45%)",
			},
		},
	]

	return (
		<div className="absolute items-center flex">
			{hands.map((value, index) => (
				<div key={index} className={value.className} style={value.style} />
			))}
		</div>
	)
}

export default Hands

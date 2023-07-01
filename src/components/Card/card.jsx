import "../Card/card.scss"
import React from "react"
import { Link } from 'react-router-dom'

function Card({ link, cover, title }) {
	return (
		<div className="Card">
			<Link to={link}>
				<div className="Card-cover">
					<img src={cover} alt="" />
				</div>
				<h2 className="Card-title">{title}</h2>
			</Link>
		</div>
	)
}

export default Card

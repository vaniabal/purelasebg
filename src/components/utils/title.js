import React from 'react'

import './utils.css'

const Title = ({ title, subtitle }) => (
	<div className="title-wrapper text-center">
		<h2 className="title">{title}</h2>
		<h3 className="subtitle">{subtitle}</h3>
		<div className="underline" />
	</div>
)

export default Title

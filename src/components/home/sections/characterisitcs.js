import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Title } from '../../utils'

const chars = [
	{
		imgIndex : 1,
		title    : 'Подхоящ за всеки тип кожа и косъм',
		text     : 'Сигурен и бърз, необходими сесии 8-10 с интервал от 4 седмици'
	},
	{
		imgIndex : 2,
		title    : 'Индивидуална настройка на лазера, според типа кожа',
		text     : 'Намалява риска от увреждане на повърхностния слой на кожата (епидермиса)'
	},
	{
		imgIndex : 3,
		title    : 'Ефективност на лазерна процедура',
		text     : 'Получавате бързи, качествени и дълготрайни резултати'
	},
	{
		imgIndex : 4,
		title    : 'Безопасна и безболезнена лазерна епилация',
		text     : 'Процедури дори в разгара на лятото'
	}
]

const Characterisitcs = () => (
	<StaticQuery
		query={graphql`
			query {
				img1: file(relativePath: { eq: "slide1.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
				img2: file(relativePath: { eq: "slide2.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
				img3: file(relativePath: { eq: "slide3.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
				img4: file(relativePath: { eq: "slide4.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1500) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		`}
		render={(data) => (
			<section>
				<Title title="Ефективност и сигурност" imgUrl="slide1.jpg" />

				{chars.map(({ imgIndex, title, text }) => (
					<div key={imgIndex} className="card border-0">
						<Img fluid={data[`img${imgIndex}`].childImageSharp.fluid} className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">{title}</h5>
							<p className="card-text">{text}</p>
						</div>
					</div>
				))}
			</section>
		)}
	/>
)

export default Characterisitcs

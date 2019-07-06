import React from 'react'

import { FaPhoneSquare } from 'react-icons/fa'

import './mobile.css'

export default function Mobile () {
	return (
		<div className="d-md-none mobile-call-to-action">
			<div className="row" style={{ height: '100%' }}>
				<div className="col-6 align-self-center text-center text-uppercase">
					<p className="my-0">Резервирай час</p>
				</div>
				<div className="col-6 align-self-center">
					<button className="btn btn-dark">
						<a style={{ color: '#ffffff' }} href="tel:+359896988688">
							<FaPhoneSquare />
							<span className="align-middle ml-2">0883 917777</span>
						</a>
					</button>
				</div>
			</div>
		</div>
	)
}

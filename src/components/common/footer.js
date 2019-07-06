import React from 'react'

const Footer = () => {
	return (
		<footer className="footer py-2 border-top border-dark bg-dark text-light" style={{ marginBottom: '65px' }}>
			<div className="container">
				<div className="row">
					<div className="col-12 mx-auto text-center">
						<p className="mb-0">Purelase&copy; {new Date().getFullYear().toString()}</p>
						<p className="mb-0">София, Студентски Град, ул. Д-р Йордан Йосифов 8Б (Barocco Build)</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

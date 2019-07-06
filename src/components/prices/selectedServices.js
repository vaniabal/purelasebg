import React from 'react'

const SelectedServices = ({ services, handleRemoveService }) => {
	const amount = services.reduce((acc, service) => {
		const serviceName = Object.keys(service)
		return acc + service[serviceName]
	}, 0)
	return (
		<div>
			<table className="table table-borderless table-dark">
				<thead>
					<tr>
						<th scope="col">Услуга</th>
						<th scope="col">За жени/ За мъже</th>
						<th scope="col">Цена</th>
						<th scope="col" />
					</tr>
				</thead>
				<tbody>
					{services.map((service, i) => {
						const serviceName = Object.keys(service)
						return (
							<tr key={i}>
								<th scope="row">{serviceName}</th>
								<td />
								<td>{service[serviceName]} лв</td>
								<td>
									{' '}
									<button key={i} onClick={() => handleRemoveService(serviceName)}>
										{' - '}
									</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<div>Общо сума {amount}</div>
		</div>
	)
}

export default SelectedServices

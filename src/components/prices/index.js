import React, { Component } from "react"

import { Title } from "../utils"
import services from "./prices"
import SelectedServices from "./selectedServices"

class Pricing extends Component {
  state = {
    selectedServices: [],
  }

  handleAddService = service => {
    const selectedServices = [...this.state.selectedServices, service]
    // should not be able to add 2 times same service
    this.setState(() => ({ selectedServices }))
  }

  handleRemoveService = serviceName => {
    const services = [...this.state.selectedServices]
    const selectedServices = services.filter(service => {
      const name = Object.keys(service)
      if (name[0] !== serviceName[0]) return service
      return false
    })
    this.setState(() => ({ selectedServices }))
  }
  renderServices = () => {
    return services.map((service, i) => {
      const serviceName = Object.keys(service)
      return (
        <tr key={i}>
          <th className="py-1 text-capitalize" scope="row">
            {serviceName}
          </th>
          <td className="py-1">{service[serviceName]} лв</td>
          <td className="py-1">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => this.handleAddService(service)}
            >
              +
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    const { selectedServices } = this.state

    return (
      <div>
        <Title title="Haшите Цени" subtitle="Еднакви цени за жени и мъже!" />
        <div className="inverse">
          <table
            className="table table-borderless table-dark"
            style={{ background: "#000" }}
          >
            <thead>
              <tr>
                <th scope="col">Услуга</th>
                <th scope="col">Цена</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>{this.renderServices()}</tbody>
          </table>

          {selectedServices.length ? (
            <SelectedServices
              services={selectedServices}
              handleRemoveService={this.handleRemoveService}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Pricing

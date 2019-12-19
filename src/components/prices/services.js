import React, { Component } from "react"
import { MdAddCircleOutline } from "react-icons/md"

import { Title, sortServices } from "../utils"
import SelectedServices from "./selectedServices"

class services extends Component {
  state = {
    selectedServices: [],
  }

  handleAddService = service => {
    // check if already seleted
    const previousSelectedServices = this.state.selectedServices
    const alreadyAdded = previousSelectedServices.find(
      item => item.name === service.name
    )
    // add if not already in selected servies
    if (!alreadyAdded) {
      const selectedServices = [...previousSelectedServices, service]
      this.setState(() => ({ selectedServices }))
    } else {
      alert("Вече избрана услуга!")
    }
  }

  handleRemoveService = name => {
    const services = [...this.state.selectedServices]
    const selectedServices = services.filter(service => {
      if (service.name !== name) return service
      return false
    })
    this.setState(() => ({ selectedServices }))
  }
  renderServices = () => {
    const services = sortServices(this.props.services)

    return services.map(({ name, price, id, servicePosition }) => {
      const service = { name, price, id, servicePosition }
      return (
        <tr key={id}>
          <th className="py-1 text-capitalize" scope="row">
            {name}
          </th>
          <td className="py-1">{price} лв</td>
          <td className="py-1">
            <MdAddCircleOutline
              style={{ height: "1.3em", width: "1.3em" }}
              onClick={() => this.handleAddService(service)}
            />
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
                <th scope="col">Добави</th>
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

export default services

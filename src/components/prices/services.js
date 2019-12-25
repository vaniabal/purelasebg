import React, { Component } from "react"
import posed, { PoseGroup } from "react-pose"

import { MdAdd } from "react-icons/md"

import { Title, sortServices } from "../utils"
import SelectedServices from "./selectedServices"

const SelectedServicesModal = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

class services extends Component {
  state = {
    selectedServices: [],
    isVisibleSelected: false,
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
        <li key={id} className="service-wrapper">
          <span className="col-7 text-capitalize pl-1">{name}</span>
          <span className="col-3">{price} лв</span>
          <span className="col-2 pr-1">
            <span
              className="service-icon-wrapper"
              onClick={() => this.handleAddService(service)}
            >
              <MdAdd className="service-icon" />
            </span>
          </span>
        </li>
      )
    })
  }

  render() {
    const { selectedServices } = this.state
    return (
      <div style={{ position: "relative" }}>
        <Title title="Haшите Цени" subtitle="Еднакви цени за жени и мъже!" />
        <div className="inverse services-container">
          <ul className="services">
            <li className="services-header">
              <span className="col-7 pl-1">Услуга</span>
              <span className="col-3">Цена</span>
              <span className="col-2 pr-1">
                <span style={{ padding: "5px" }}>
                  <MdAdd className="service-icon" />
                </span>
              </span>
            </li>
            {this.props.services.length && this.renderServices()}
          </ul>
        </div>
        <PoseGroup>
          {selectedServices.length ? (
            <SelectedServicesModal key="selectedservicemodal">
              <SelectedServices
                services={selectedServices}
                handleRemoveService={this.handleRemoveService}
              />
            </SelectedServicesModal>
          ) : null}
        </PoseGroup>
      </div>
    )
  }
}

export default services

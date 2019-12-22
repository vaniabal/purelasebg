import React from "react"
import { MdRemove } from "react-icons/md"

const SelectedServices = ({ services, handleRemoveService }) => {
  const amount = services.reduce((acc, service) => {
    return acc + service.price
  }, 0)

  return (
    <div className="selected-services-container">
      <h3 className="selected-services-title">Избрани услуги</h3>
      <ul className="selected-services">
        {services.map(({ id, name, price }) => {
          return (
            <li key={id} className="selected-service-wrapper">
              <span className="text-capitalize col-6 pl-1">{name}</span>
              <span className="col-4">{price} лв</span>
              <span className="col-2 pr-1">
                <MdRemove
                  style={{ height: "1.3em", width: "1.3em" }}
                  onClick={() => handleRemoveService(name)}
                />
              </span>
            </li>
          )
        })}
      </ul>
      <div className="selected-services-total">Общо сума {amount} лв</div>
    </div>
  )
}

export default SelectedServices

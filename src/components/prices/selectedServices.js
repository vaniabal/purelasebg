import React from "react"
import { MdRemoveCircleOutline } from "react-icons/md"

const SelectedServices = ({ services, handleRemoveService }) => {
  const amount = services.reduce((acc, service) => {
    return acc + service.price
  }, 0)

  return (
    <div>
      <h3 className="text-center">Избрани услуги</h3>
      <table className="table table-borderless table-dark">
        <thead>
          <tr>
            <th scope="col">Услуга</th>
            <th scope="col">Цена</th>
            <th scope="col">Премахни</th>
          </tr>
        </thead>
        <tbody>
          {services.map(({ id, name, price }) => {
            return (
              <tr key={id}>
                <th scope="row" className="text-capitalize">
                  {name}
                </th>
                <td>{price} лв</td>
                <td>
                  <MdRemoveCircleOutline
                    style={{ height: "1.3em", width: "1.3em" }}
                    onClick={() => handleRemoveService(name)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>Общо сума {amount} лв</div>
    </div>
  )
}

export default SelectedServices

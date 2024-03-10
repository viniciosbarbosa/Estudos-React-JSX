import React from 'react'

const DetalhesCarro = ({marca , km , cor , newCar}) => {
  return (
    <div>
        <ul>
            <p>Carro</p>

            <li>{marca}</li>
            <li>{km}</li>
            <li>{cor}</li>
        </ul>

        {newCar !== false &&(
            <div>
                este carro é novo
            </div>
        )}
    </div>
  )
}

export default DetalhesCarro
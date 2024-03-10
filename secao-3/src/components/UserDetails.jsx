import React from 'react'

const UserDetails = ({nome , idade}) => {
  return (
    <div>
        <ul>
            <li>{nome}</li>
            <li>{idade}</li>
        </ul>

        {idade >=18  ? (<p>Pode digirir</p>) : (<p>nao pode digirir</p>)}
    </div>
  )
}

export default UserDetails
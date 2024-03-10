import React from 'react'


const Container = ({children}) => {
  return (
    <div>
        <h2>
            este e o titulo container
        </h2>

        <p>{children}</p>
    </div>
  )
}

export default Container
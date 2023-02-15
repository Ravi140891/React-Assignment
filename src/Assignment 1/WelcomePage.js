import React from 'react'

function WelcomePage(props) {
  return (
    <div>
        <h1>Hello {props.email}</h1>
    </div>
  )
}

export default WelcomePage
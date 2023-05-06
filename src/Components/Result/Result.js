import React from 'react'
import "./Result.css"

const Result = (props) => {
    let iconSre = ("https://openweathermap.org/img/wn/"+props.getIcon+".png");
  return (
    <div>
      <img className='Iconw' src={iconSre} alt="" />
      <h1>{props.getName}</h1>
      <div className='status'>
      <h3>{props.getTemp} &nbsp;</h3>
      <h3>{props.getDescription}</h3>
      </div>
      <p>If your city dont come on first try plese click the  button again. API issue </p>
    </div>
  )
}

export default Result

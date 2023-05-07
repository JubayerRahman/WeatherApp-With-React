import React,{useState} from 'react'
import "./InputField.css"

const InputField = (props) => {
  const [cityName, setcityName] = useState("")
  const [Weatherdata, setWeatherdata] = useState()
  // api key
  const apikey ="85d8ced73595ca5aa16e24120891dcf8";

  const getCityName =(event)=>{
    setcityName(event.target.value)
  }


  const getWeatherData =(event)=>{
    event.preventDefault()
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid="+apikey+"")
    .then(responce=>responce.json())
    .then(data=>setWeatherdata(data))
    .catch(
      props.getName("sorry, No weather Data found"),
    props.getTemp(),
    props.getDescription(),
    props.getIcon(" ")
    )
    setcityName(event.target.value)
    // .then(data=>console.log(data))
    // let name = Weatherdata.name +" "+Weatherdata.sys.country;
    let temp = Weatherdata.main.temp+ " °C";
    let description = Weatherdata.weather[0].main;
    let icon = Weatherdata.weather[0].icon;
    // console.log(name +" "+temp+" "+description)
    props.getName(Weatherdata.name +", "+Weatherdata.sys.country)
    props.getTemp(temp)
    props.getDescription(description)
    props.getIcon(icon)
  }

  return (
    <div className='inputField'>
      <form>
      <input type='text' placeholder='City name' value={cityName} onChange={getCityName}></input>
      <button onClick={getWeatherData}><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default InputField
import React, {useState} from 'react'
import'./MainField.css'
import InputField from '../InputField/InputField'
import Result from '../Result/Result'

const MainField = () => {
  const [name, setName] = useState();
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();

  const getName =(data)=>{
    setName(data)
  }
  const getTemp =(data)=>{
    setTemp(data)
  }
  const getDescription =(data)=>{
    setDescription(data)
  }
  const getIcon =(data)=>{
    setIcon(data)
  }
  return (
    <div className='mainfield'>
      <InputField getName={getName} getTemp={getTemp} getDescription={getDescription} getIcon={getIcon}/>
      <Result getName={name} getTemp={temp} getDescription={description} getIcon={icon}/>
    </div>
  )
}

export default MainField

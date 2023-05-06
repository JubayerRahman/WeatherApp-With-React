import React, {useState, useEffect} from 'react'
import "../../index.css"
import "./SetTheme.css"

const SetTheme = () => {
    const [mode, setMode] = useState("darkTheme")
    const [icon, setIcon] = useState("fa-regular fa-sun")
    useEffect(()=>{
        document.body.className = mode
    },[mode])

    const changeTheme = ()=>{
        if(mode ==="darkTheme"){
            setMode("lightTheme")
            setIcon("fa-regular fa-moon")
        }
        if(mode ==="lightTheme"){
            setMode("darkTheme")
            setIcon("fa-regular fa-sun")
        }
    }
  return (
    <div>
      <button className="themeButton" onClick={changeTheme}><i className={icon}></i></button>
    </div>
  )
}

export default SetTheme

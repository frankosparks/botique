import React from "react";
import View1 from "./homeView";
import Home from "../home";

function Welcome(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if(hours < 12){
    timeOfDay = "morning"
  }
  else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
  }
  else if(hours >= 17 && hours < 20){
    timeOfDay = "evening"
  }
  else{
    timeOfDay = "night"
  }

  return(
    <div className="vcontainer half-bg">
      <div className="welcome">
        <h1>Good {timeOfDay}, welcome and shop with us &#129303;.</h1>
        <h2>Feel Youself a new</h2>
        <p className="align">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, illo hic delectus nisi corrupti voluptates rerum veritatis vel vero pariatur. Numquam incidunt excepturi libero perspiciatis provident sed quisquam natus omnis?</p>
        <p className="align">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptas!</p>

        <div>{<Home />}</div>

      </div>
      <img src="\images\sas.png" alt="" className="madam"/>
    </div>
  )
}

export default Welcome;
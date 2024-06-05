import React from "react";

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
    <div className="intro ">
      <h1>Good {timeOfDay}, welcome and shop with us &#129303;.</h1>
    </div>
  )
}

export default Welcome;
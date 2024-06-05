import React from "react";

function View1(props2){
  //denanda -welcome
  return (
    <div className="v-flex">
      <div className="vcontainer v-bg">
        <img src={props2.image} alt="" className="small" />
        <div className="info">
        We have the best {props2.info} for all of our customers.Quality that satisfies
        <p><a href={props2.toview} className="link">View More</a></p>
        </div>
      </div>
    </div>
  )
}

export default View1;
import App from "./App";
import View1 from "./components/homeView";

function Home(){
  return (
    <div className="vcont">
      <View1 
       image="\images\shoe\1 (2).jpg"
       info="SHOES"
       toview={<App />}
      />
      <View1 
      image="\images\bags\bag (5).jpg"
      info="BAGS"
      toview={<App />}
      />
      <View1  
      image="\images\dress\1 (35).jpg"
      info="DRESSES"
      toview={<App />}
      />
      <View1 
      image="\images\lady6.jpg"
      info="KITENGE"
      toview={<App />}
      />
      <View1 
      image="\images\shorts\1 (55).jpg"
      info="SHORTS"
      toview={<App />}
      />
      <View1 
      image="\images\wear3.jpg"
      info="FITTINGS"
      toview={<App />}
      />
    </div>
  )
}

export default Home;
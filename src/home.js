import View1 from "./components/homeView";
import ProductList from "./productsData";

function Home(){
  return (
    <div className="vcont">
      <View1 
       image="\images\shoe\1 (2).jpg"
       info="SHOES"
       toview='shoe'
      />
      <View1 
      image="\images\bags\bag (5).jpg"
      info="BAGS"
      toview="bags"
      />
      <View1  
      image="\images\dress\1 (35).jpg"
      info="DRESSES"
      toview="dress"
      />
      <View1 
      image="\images\lady6.jpg"
      info="KITENGE"
      toview='kitenge'
      />
      <View1 
      image="\images\shorts\1 (55).jpg"
      info="SHORTS"
      toview='dress'
      />
      <View1 
      image="\images\wear3.jpg"
      info="FITTINGS"
      toview='dress'
      />
    </div>
  )
}

export default Home;
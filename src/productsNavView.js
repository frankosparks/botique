import { useEffect, useState } from "react";
import View2 from "./components/productsNavView";
import Footer from "./components/footer";
import ProductList from "./productsData";

function Products(){
  
  return (
    <div className="p-view">
      <h1 className="h">OUR PRODUCT COLLECTION</h1>
      <marquee className= "bold h_pink f_1 w_l" behavior="" direction="left" >Shop now and get tromendous discounts &#x1F4B0;.
      Hurry you don't miss it &#129303;.</marquee>
      <View2
       image2="\images\shoe\1 (2).jpg"
       image1="\images\lady.png"
       about="Shoes"
       toview={<ProductList category="bag" />}

      />
      <View2 
      image1="\images\bags\bag (2).jpg"
      image2="\images\lady.png"
      about="Bags"
      toview={<ProductList category="bag" />}
      />
      <View2  
      image2="\images\dress\1 (33).jpg"
      image1="\images\lady.png"
      about="Dresses"
      toview={<ProductList category="bag" />}
      />
      <View2 
      image1="\images\kitenge\1 (2).jpg"
      image2="\images\lady.png"
      about="Kitenge"
      toview={<ProductList category="bag" />}
      />
      <View2 
      image2="\images\shorts\1 (55).jpg"
      image1="\images\lady.png"
      about="Short"
      toview={<ProductList category="bag" />}
      />
      <View2 
      image1="\images\waer1.jpg"
      image2="\images\lady.png"
      about="Fittings"
      toview={<ProductList category="bag" />}
      />
      <Footer />
    </div>
  )
}

export default Products;
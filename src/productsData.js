import React from 'react';
import Product from './components/allProducts';

function ProductList({ category }) {
  
const productsData = [
  //dress
  { id: 1, type: "dress", image: "/images/dress/1 (33).jpg", name: "Dress", d_price: 1200, price_red: 1800 },
  { id: 2, type: "dress", image: "/images/dress/1 (50).jpg", name: "Dress", d_price: 1500, price_red: 1800 },
  { id: 3, type: "dress", image: "/images/dress/1 (47).jpg", name: "Dress", d_price: 1600, price_red: 1900 },
  { id: 4, type: "dress", image: "/images/dress/1 (36).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 5, type: "dress", image: "/images/dress/1 (51).jpg", name: "Dress", d_price: 1000, price_red: 1700 },
  { id: 6, type: "dress", image: "/images/dress/1 (70).jpg", name: "Dress", d_price: 1900, price_red: 2400 },
  { id: 7, type: "dress", image: "/images/dress/1 (47).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 8, type: "dress", image: "/images/dress/1 (40).jpg", name: "Dress", d_price: 1900, price_red: 2400 },
  { id: 9, type: "dress", image: "/images/dress/1 (42).jpg", name: "Dress", d_price: 1600, price_red: 1900 },
  { id: 10, type: "dress", image: "/images/dress/1 (52).jpg", name: "Dress", d_price: 1200, price_red: 1800 },
  { id: 11, type: "dress", image: "/images/dress/1 (46).jpg", name: "Dress", d_price: 1900, price_red: 2400 },
  { id: 12, type: "dress", image: "/images/dress/1 (44).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 13, type: "dress", image: "/images/dress/1 (53).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 14, type: "dress", image: "/images/dress/1 (54).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 15, type: "dress", image: "/images/dress/1 (55).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 16, type: "dress", image: "/images/dress/1 (60).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 17, type: "dress", image: "/images/dress/1 (57).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 18, type: "dress", image: "/images/dress/1 (58).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 19, type: "dress", image: "/images/dress/1 (59).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 20, type: "dress", image: "/images/dress/1 (35).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 21, type: "dress", image: "/images/dress/1 (61).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 22, type: "dress", image: "/images/dress/1 (62).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 23, type: "dress", image: "/images/dress/1 (73).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 24, type: "dress", image: "/images/dress/1 (66).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 25, type: "dress", image: "/images/dress/1 (65).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 26, type: "dress", image: "/images/dress/1 (74).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 27, type: "dress", image: "/images/dress/1 (71).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 28, type: "dress", image: "/images/dress/1 (68).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 29, type: "dress", image: "/images/dress/1 (69).jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 30, type: "dress", image: "/images/lady5.jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 31, type: "dress", image: "/images/lady4.jpg", name: "Dress", d_price: 1100, price_red: 1600 },
  { id: 32, type: "dress", image: "/images/shorts/1 (56).jpg", name: "Short", d_price: 1100, price_red: 1600 },
  { id: 33, type: "dress", image: "/images/waer1.jpg", name: "Fitting", d_price: 1100, price_red: 1600 },
  { id: 34, type: "dress", image: "/images/wear2.jpg", name: "Fitting", d_price: 1100, price_red: 1600 },
  { id: 35, type: "dress", image: "/images/wear3.jpg", name: "Fitting", d_price: 1100, price_red: 1600 },
  { id: 36, type: "dress", image: "/images/lady6.jpg", name: "Fitting", d_price: 1100, price_red: 1600 },
  
  // kitenge
  { id: 37, type: "kitenge", image: "/images/kitenge/13.jpg", name: "Kitenge", d_price: 1300, price_red: 1800 },
  { id: 38, type: "kitenge", image: "/images/kitenge/16.jpg", name: "Kitenge", d_price: 1500, price_red: 2000 },
  { id: 39, type: "kitenge", image: "/images/kitenge/1 (4).jpg", name: "Kitenge", d_price: 1600, price_red: 1900 },
  { id: 40, type: "kitenge", image: "/images/kitenge/1 (5).jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
  { id: 41, type: "kitenge", image: "/images/kitenge/1 (6).jpg", name: "Kitenge", d_price: 1000, price_red: 1700 },
  { id: 42, type: "kitenge", image: "/images/kitenge/1 (56).jpg", name: "Kitenge", d_price: 1900, price_red: 2400 },
  { id: 43, type: "kitenge", image: "/images/kitenge/1 (57).jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
  { id: 44, type: "kitenge", image: "/images/kitenge/14.jpg", name: "Kitenge", d_price: 1900, price_red: 2400 },
  { id: 45, type: "kitenge", image: "/images/kitenge/1 (59).jpg", name: "Kitenge", d_price: 1600, price_red: 1900 },
{ id: 46, type: "kitenge", image: "/images/kitenge/1 (60).jpg", name: "Kitenge", d_price: 1200, price_red: 1800 },
{ id: 47, type: "kitenge", image: "/images/kitenge/17.jpg", name: "Kitenge", d_price: 1900, price_red: 2400 },
{ id: 48, type: "kitenge", image: "/images/kitenge/15.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 49, type: "kitenge", image: "/images/kitenge/1 (63).jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 50, type: "kitenge", image: "/images/kitenge/1 (64).jpg", name: "Kitenge", d_price: 900, price_red: 1300 },
{ id: 51, type: "kitenge", image: "/images/kitenge/1 (65).jpg", name: "Kitenge", d_price: 1100, price_red: 1700 },
{ id: 52, type: "kitenge", image: "/images/kitenge/1 (66).jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 53, type: "kitenge", image: "/images/kitenge/1 (67).jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 54, type: "kitenge", image: "/images/kitenge/1 (68).jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 55, type: "kitenge", image: "/images/kitenge/1.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 56, type: "kitenge", image: "/images/kitenge/2.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 57, type: "kitenge", image: "/images/kitenge/3.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 58, type: "kitenge", image: "/images/kitenge/4.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 59, type: "kitenge", image: "/images/kitenge/5.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 60, type: "kitenge", image: "/images/kitenge/6.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 61, type: "kitenge", image: "/images/kitenge/7.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 62, type: "kitenge", image: "/images/kitenge/8.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 63, type: "kitenge", image: "/images/kitenge/9.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 64, type: "kitenge", image: "/images/kitenge/10.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 65, type: "kitenge", image: "/images/kitenge/11.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },
{ id: 66, type: "kitenge", image: "/images/kitenge/12.jpg", name: "Kitenge", d_price: 1100, price_red: 1600 },

//shoe
{ id: 67, type: "shoe", image: "/images/shoe/1 (2).jpg", name: "Shoe", d_price: 1200, price_red: 1800 },
{ id: 68, type: "shoe", image: "/images/shoe/1 (17).jpg", name: "Shoe", d_price: 1500, price_red: 1800 },
{ id: 69, type: "shoe", image: "/images/shoe/1 (18).jpg", name: "Shoe", d_price: 1600, price_red: 1900 },
{ id: 70, type: "shoe", image: "/images/shoe/shoe 2.png", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 71, type: "shoe", image: "/images/shoe/1 (20).jpg", name: "Shoe", d_price: 1000, price_red: 1700 },
{ id: 72, type: "shoe", image: "/images/shoe/1 (21).jpg", name: "Shoe", d_price: 1900, price_red: 2400 },
{ id: 73, type: "shoe", image: "/images/shoe/1 (22).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 74, type: "shoe", image: "/images/shoe/1 (23).jpg", name: "Shoe", d_price: 1900, price_red: 2400 },
{ id: 75, type: "shoe", image: "/images/shoe/1 (24).jpg", name: "Shoe", d_price: 1600, price_red: 1900 },
{ id: 76, type: "shoe", image: "/images/shoe/1 (25).jpg", name: "Shoe", d_price: 1200, price_red: 1800 },
{ id: 77, type: "shoe", image: "/images/shoe/1 (26).jpg", name: "Shoe", d_price: 1900, price_red: 2400 },
{ id: 78, type: "shoe", image: "/images/shoe/1 (27).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 79, type: "shoe", image: "/images/shoe/1 (28).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 80, type: "shoe", image: "/images/shoe/1 (29).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 81, type: "shoe", image: "/images/shoe/1 (30).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 82, type: "shoe", image: "/images/shoe/1 (31).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 83, type: "shoe", image: "/images/shoe/1 (32).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 84, type: "shoe", image: "/images/shoe/1 (33).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 85, type: "shoe", image: "/images/shoe/1 (34).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 86, type: "shoe", image: "/images/shoe/1 (35).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 87, type: "shoe", image: "/images/shoe/1 (36).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 88, type: "shoe", image: "/images/shoe/1 (37).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 89, type: "shoe", image: "/images/shoe/1 (38).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 90, type: "shoe", image: "/images/shoe/1 (39).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 91, type: "shoe", image: "/images/shoe/shoe (4).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 92, type: "shoe", image: "/images/shoe/1 (41).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 93, type: "shoe", image: "/images/shoe/1 (42).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 94, type: "shoe", image: "/images/shoe/1 (43).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 95, type: "shoe", image: "/images/shoe/1 (44).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 96, type: "shoe", image: "/images/shoe/1 (45).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 97, type: "shoe", image: "/images/shoe/1 (46).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 98, type: "shoe", image: "/images/shoe/1 (47).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 99, type: "shoe", image: "/images/shoe/1 (48).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 100, type: "shoe", image: "/images/shoe/254702708202_status_4c7b2b38a0f74feab597936a5d129518 (2).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 101, type: "shoe", image: "/images/shoe/254726460635_status_a6295b07774b492d951c6ffbd1ad0ead (2).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },
{ id: 102, type: "shoe", image: "/images/shoe/254726460635_status_48fca5b03a034e1787dc99431af7294d (2).jpg", name: "Shoe", d_price: 1100, price_red: 1600 },

//bag
{ id: 103, type: "bag", image: "/images/bags/bags (23).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 104, type: "bag", image: "/images/bags/bag (8).jpg", name: "Handbag", d_price: 1500, price_red: 1800 },
{ id: 105, type: "bag", image: "/images/bags/bags1 (2).jpg", name: "Handbag", d_price: 1600, price_red: 1900 },
{ id: 106, type: "bag", image: "/images/bags/bags (12).jpg", name: "Handbag", d_price: 1100, price_red: 1600 },
{ id: 107, type: "bag", image: "/images/bags/bag (4).jpg", name: "Handbag", d_price: 1000, price_red: 1700 },
{ id: 108, type: "bag", image: "/images/bags/bags (21).jpg", name: "Handbag", d_price: 1900, price_red: 2400 },
{ id: 109, type: "bag", image: "/images/bags/bags (9).jpg", name: "Handbag", d_price: 1100, price_red: 1600 },
{ id: 110, type: "bag", image: "/images/bags/bags (22).jpg", name: "Handbag", d_price: 1900, price_red: 2400 },
{ id: 111, type: "bag", image: "/images/bags/bag7.jpg", name: "Handbag", d_price: 1600, price_red: 1900 },
{ id: 112, type: "bag", image: "/images/bags/bag (2).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 113, type: "bag", image: "/images/bags/bag1.jpg", name: "Handbag", d_price: 1900, price_red: 2400 },
{ id: 114, type: "bag", image: "/images/bags/bag3.jpg", name: "Handbag", d_price: 1100, price_red: 1600 },
{ id: 115, type: "bag", image: "/images/bags/bags2.jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 116, type: "bag", image: "/images/bags/bag5.jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 117, type: "bag", image: "/images/bags/bag6.jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 118, type: "bag", image: "/images/bags/bag7.jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 119, type: "bag", image: "/images/bags/bags (2).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 120, type: "bag", image: "/images/bags/bags (3).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 121, type: "bag", image: "/images/bags/bags (4).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 122, type: "bag", image: "/images/bags/bags (5).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 123, type: "bag", image: "/images/bags/bags (6).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 124, type: "bag", image: "/images/bags/bags (7).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 125, type: "bag", image: "/images/bags/bags (8).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 126, type: "bag", image: "/images/bags/bags (9).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 127, type: "bag", image: "/images/bags/bags (10).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 128, type: "bag", image: "/images/bags/bags (11).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 129, type: "bag", image: "/images/bags/bags (12).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 130, type: "bag", image: "/images/bags/bags (19).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 131, type: "bag", image: "/images/bags/bags (17).jpg", name: "Handbag", d_price: 1200, price_red: 1800 },
{ id: 132, type: "bag", image: "/images/bags/bags (18).jpg", name: "Handbag", d_price: 1200, price_red: 1800 }

];

const filteredProducts = category === "all"
? productsData
: productsData.filter(product => product.type === category);

return (
  <div className="App">
    {filteredProducts.map(product => (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        d_price={product.d_price}
        price_red={product.price_red}
      />
    ))}
  </div>
);
}
export default ProductList;

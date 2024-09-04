import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductImage from "./productImage";

function Profile() {
  const [product, setProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("currentProduct"));
    if (storedProduct) {
      setProduct(storedProduct);
    }
    else{
      console.warn("No product rendered")
    }
  }, []);
  if (!product) {
    return <h2 className="mt-32">Loading ...</h2>;
  }
  const productImage = [product.image, product.image, product.image].filter(Boolean);
  
  function handleInputChange (e){
    setSearchQuery(e.target.value);
  }

  function handleSearch(){
    console.log("Searching for:", searchQuery)
  }

  const ratings= [
    {value:"4",width:"80%"},
    {value:"3",width:"60%"},
    {value:"2",width:"40%"},
    {value:"1",width:"20%"},
    {value:"0",width:"0%"}
  ]

  return (
    <div className="bg-white mt-32">
      <div className="flex gap-12">
        <div className="mt-[11px] w-[365px] h-[789px]">
          <ProductImage images={productImage} />
        </div>
        <div className="bg-white w-[469.88px]">
          <div className="flex mt-[11px] mb-4">
            <h2 className="text-[26px] text-[#262626]">Rating:</h2>
            <em className="text-[#C1C1C1] text-[13px] mt-3.75 ml-1.25 font-sans w-[224.9px] pt-0 pr-0 pb-0 pl-2.5">
              (As Of August 2, 2024, 1:26 pm)
            </em>
            <ul className="w-[94.9px] h-[24px] mt-3.75 flex gap-1">
              <li>
                <a
                  className="no-underline text-[#989898] hover:text-orange-500 text-[13px]"
                  href="https://accessories-arena.com/product/neon-nights-invisible-wall-and-canvas-paints-4-invisible-uv-glow-in-the-dark-paint-cans-vibrant-ultraviolet-paints-charge-in-the-daylight-and-glow-in-the-darkness-20ml-luminescent-cans/"
                  rel="prev"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  className="no-underline text-[#989898] hover:text-orange-500 text-[13px]"
                  href="https://accessories-arena.com/product/gold-2019-balloon-large-40inch-graduation-party-balloons-decorations-graduation-party-supplies-latex-balloons-star-balloons-confetti-balloons/"
                  rel="next"
                >
                  / Next
                </a>
              </li>
            </ul>
          </div>
          <hr className="border-t-2 border-dotted border-gray-600 w-[469.88px]" />
          <div className="mt-[37px]">
            <h1 className="text-[28px] text-[#262626] font-nunito">
              {product.description || "Product Description"}
            </h1>
            <p className="text-[#eb651a] text-[18px] font-sans mt-6 mb-6">
              <em className="font-sans">
                Amazon.com Price:&nbsp;
                <span className="woocommerce-Price-amount amount">
                  <span className="font-sans">$</span>
                  {product.amount || "0.00"}
                </span>
                &nbsp;(as of 09/04/2023 12:16 PST-
                <a
                  name="Details"
                  href="#TB_inline?&amp;inlineId=WooZone-price-disclaimer&amp;width=500&amp;height=250"
                  className="text-[#ff1c1c] text-[18px] font-sans no-underline"
                >
                  Details
                </a>
                )
              </em>
            </p>
            <p className="mb-6">
              {product.description || "No description available."}
            </p>
            <div>
              <span className="font-bold text-[20px]">Categories:&nbsp;</span>
              {product.category ? (
                product.category.split(",").map((cat, index) => (
                  <span key={index}>
                    <a
                      className="no-underline text-[#000000] text-[13px]"
                      href={`https://accessories-arena.com/product-category/${cat
                        .trim()
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      rel="tag"
                    >
                      {cat.trim()}
                    </a>
                    {index < product.category.split(",").length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>No category</span>
              )}
            </div>
            <p className="mt-12">
              <a
                href={product.amazonLink || "#"}
                rel="nofollow"
                className="text-[#ffffff] bg-[#E53238] text-[15px] w-[176px] h-[38px] pt-[8px] pb-[8px] pl-[15px] pr-[15px] no-underline text-[15px] font-bold rounded-sm"
              >
                Checkout on Amazon
              </a>
            </p>
          </div>
        </div>
        <div className="search text-[#333333] text-[13px] w-[250px]">
          <h3 className="text-[26px] font-semibold">SEARCH</h3>
          <hr className="border-t-2 border-dotted border-gray-600 w-[250px] mt-8 mb-8" />
          <div className="flex flex-col gap-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-sm p-2 mr-2 w-[250px]"
            />
            <button
              onClick={handleSearch}
              className="bg-[#Eb651A] font-semibold text-white w-[120px] h-[42px] text-[15px]"
            >
              SEARCH
            </button>
          </div>
          <div className="p-4 mt-20">
            <h3 className="text-xl font-semibold mb-4">CUSTOMER REVIEW</h3>
            <hr className="border-t-2 border-dotted border-gray-600" />
            <ul className="space-y-2 mt-10">
              {ratings.map((rating) => (
                <li key={rating.value} className="flex items-center">
                  <a
                    href={`https://accessories-arena.com/shop/?filter_amazon_rating=${rating.value}`}
                    data-rating={rating.value}
                    className="flex items-center no-underline text-[#262626] text-[16px] w-[146px] h-[23px] hover:text-[#Eb651A] font-semibold"
                  >
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={`text-yellow-400 ${
                            index < rating.value ? "opacity-100" : "opacity-50"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2"> &amp; Up</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

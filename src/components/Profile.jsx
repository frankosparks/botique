import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductImage from "./productImage";

function Profile() {
  const [product, setProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("currentProduct"));
    console.log("Retrieved product:", storedProduct); // Check this log
    if (storedProduct) {
      setProduct(storedProduct);
    } else {
      console.warn("No product in localStorage");
    }
  }, []);
  if (!product) {
    return <h2 className="mt-32">Loading ...</h2>;
  }
  const productImages = [product.image, product.image1, product.image2];

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearch() {
    console.log("Searching for:", searchQuery);
  }

  const ratings = [
    { value: "4", width: "80%" },
    { value: "3", width: "60%" },
    { value: "2", width: "40%" },
    { value: "1", width: "20%" },
    { value: "0", width: "0%" },
  ];

  return (
    <div className="p_g">
      <div className="fg-12">
        <div className="m-w-h">
          <ProductImage images={productImages} />
        </div>
        <div className="b-w">
          <div className="f-m">
            <h2 className="tt">Rating:</h2>
            <em className="rating-em">(As Of August 2, 2024, 1:26 pm)</em>
            <ul className="rating-list">
              <li>
                <a className="rating-link" href="#prev" rel="prev">
                  Previous
                </a>
              </li>
              <li>
                <a className="rating-link" href="#next" rel="next">
                  / Next
                </a>
              </li>
            </ul>
          </div>
          <hr className="product-divider" />
          <div className="product-details">
            <h1 className="product-title">
              {product.description || "Product Description"}
            </h1>
            <p className="product-price">
              <em className="product-price-details">
                Amazon.com Price:&nbsp;
                <span className="woocommerce-Price-amount amount">
                  <span className="font-sans">$</span>
                  {product.amount || "0.00"}
                </span>
                &nbsp;(as of 09/04/2023 12:16 PST-
                <a
                  name="Details"
                  href="#TB_inline?&amp;inlineId=WooZone-price-disclaimer&amp;width=500&amp;height=250"
                  className="product-price-details"
                >
                  Details
                </a>
                )
              </em>
            </p>
            <p className="product-description">
              {product.description || "No description available."}
            </p>
            <div>
              <span className="product-categories">Categories:&nbsp;</span>
              {product.category ? (
                product.category.split(",").map((cat, index) => (
                  <span key={index}>
                    <a
                      className="product-category-link"
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
            <p>
              <a
                href={product.amazonLink || "#"}
                rel="nofollow"
                className="product-amazon-link"
              >
                Checkout
              </a>
            </p>
          </div>
        </div>
        <div className="search-section">
          <h3 className="search-title">SEARCH</h3>
          <hr className="search-divider" />
          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              SEARCH
            </button>
          </div>
          <div className="review-section">
            <h3 className="review-title">CUSTOMER REVIEW</h3>
            <hr className="review-divider" />
            <ul className="review-list">
              {ratings.map((rating) => (
                <li key={rating.value} className="review-item">
                  <a
                    href={`https://accessories-arena.com/shop/?filter_amazon_rating=${rating.value}`}
                    data-rating={rating.value}
                    className="review-link"
                  >
                    <div className="review-stars">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={
                            index < rating.value
                              ? "review-star-filled"
                              : "review-star-empty"
                          }
                        />
                      ))}
                    </div>
                    <span className="review-up-text"> &amp; Up</span> 
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-images-container">
      <div className="product-image-selected">
        <img
          src={selectedImage}
          alt="Selected Product"
        />
      </div>

      <div className="product-images-list">
        {images.map((image, index) => (
          <div key={index} className="product-image-thumbnail">
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className={selectedImage === image ? "selected" : ""}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

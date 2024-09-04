import React, { useState } from "react";

const ProductImage = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(images[0])
  function handleClick(image){
    setSelectedImage(image);
  }
  return (
    <div className="c">
      <div className="flex flex-col gap-6 w-[323px] h-[737px]">
        <div className="w-[323px] h-[510px] border border-gray-300 flex item-center justify-center">
          <img
            className="w-[270px] h-[270px]  mb-0 m-0 mt-28 mx-[26px]"
            src={selectedImage}
            alt="Selected Product"
          />
        </div>

        <div className="flex gap-1">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer w-[322px]">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className={`w-28 border bg-[#fff] ${
                  selectedImage === image
                    ? " border bg-transparent"
                    : "border-gray-300"
                }`}
                onClick={() => handleClick(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
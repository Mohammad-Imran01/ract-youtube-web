import React from "react";

import "./productDetails.css";

const ProductDetails = () => {
  return (
    <>
      <div className="card">
        <a href="https://www.amazon.com" className="anchor-amazon text-all" >Back to Amazon</a>
        <h2 className="text-heading text-all">Nike Black Running Shoes</h2>
        <p className="text-price text-all">$39 - in stock.</p>
        <p className="text-delivery text-all">Free delivery tommorow.</p>
        <button className="btn-add text-all">Add to Cart</button>
        <button className="btn-buy text-all">Buy Now</button>
      </div>
    </>
  );
};

export default ProductDetails;

import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "./redux/actions/productActions";


const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {image, name, desc, price, category} = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await 
    axios
    .get(`http://localhost:5000/products/${productId}`)
    .catch((error) => {
      console.log("Error",error);
    });
    dispatch(selectedProduct(response.data));
  };
  useEffect (() => {
    if (productId && productId !== "") fetchProductDetail();
  },[productId]);

  return (
    <div className="ui placeholder segment">
    <div className="ui two column stackable center aligned grid">
      <div className="middle aligned row">
        <div className="column lp">
          <img className="ui fluid image" src={image} />
        </div>
        <div className="column rp">
          <h1>{name}</h1>
          <h2>
            <h2 className="ui teal tag label">Price: ${price}</h2>
          </h2>
          <p>Category: {category}</p>
          <p>{desc}</p>
      </div>
    </div>
  </div>
</div>
  );
};
export default ProductDetail;
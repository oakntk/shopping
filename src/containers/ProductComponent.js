import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles} from "@material-ui/core";
import { Card,
         CardHeader,
         CardMedia,
         CardContent,
         Typography,} from "@material-ui/core";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const {name, desc, price, category ,id , image} = product;
      return (
          <div className = "four column wide" key = {id}>
            <Link to = {`/product/${id}`}>
          <Card>
            <div className = "card">
              <div className = "image" >
                <img src = {image} alt = {name}/>
              </div>
                <div className = "content">
                <div className = "header">{name}</div>
                <div className = "meta">{desc}</div>
                <p></p>
                <div className = "meta price">Price: ${price}</div>
                <p></p>
                <div className = "meta">Category: {category}</div>
                </div>
            </div>
            </Card>
            </Link>
        </div>
        );
    })
    return (
      <>{renderList}</>
    );
  };

export default ProductComponent;
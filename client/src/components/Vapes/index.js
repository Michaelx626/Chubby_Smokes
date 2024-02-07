import './style.css';
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_VAPES } from "../../utils/queries";
import PaginationSet from "../../components/Pagination/index";

function Vapes() {
  const { loading, data } = useQuery(QUERY_ALL_VAPES);
  const [currentProduct, setCurrentProduct] = useState(1);
  const viewPerProduct = shouldDisplaySingleVape() ? 1 : 5;
  const [vapes, setVapes] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setVapes(data.getAllVapes);
    }
  }, [loading, data]);

  const totalVapes = vapes.length;
  const indexOfLastProduct = currentProduct * viewPerProduct;
  const indexOfFirstProduct = indexOfLastProduct - viewPerProduct;

  const currentVape = vapes.slice(indexOfFirstProduct, indexOfLastProduct);

  function shouldDisplaySingleVape() {
    return window.innerWidth <= 576;
  }

  return (
    <>
    <div className="landing-vapes-container">
      <div className="landing-vapes-list">
        {loading ? (
          <p>Loading...</p>
        ) : totalVapes > 0 ? (
          currentVape.map((vape) => (
            <div key={vape._id} className="landing-vape-item">
              <img src={vape.image}></img>
              <h5>{vape.brand}</h5>
              <h5>{vape.flavor}</h5>
              <h5>${vape.price.toFixed(2)}</h5>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No vapes available.</p>
        )}
      </div>
    </div>

    <div className="pagination-container">
      <PaginationSet
        current={currentProduct}
        onChange={setCurrentProduct}
        total={totalVapes}
        productSize={viewPerProduct}
        showQuickJumper={false}
      />
    </div>
    </>
  );
}

export default Vapes;

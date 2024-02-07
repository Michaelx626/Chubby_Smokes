import './style.css';
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_JUICES } from "../../utils/queries";
import PaginationSet from "../../components/Pagination/index";

function Juices() {
  const { loading, data } = useQuery(QUERY_ALL_JUICES);
  const [currentProduct, setCurrentProduct] = useState(1);
  const viewPerProduct = shouldDisplaySingleJuice() ? 1 : 5;
  const [juices, setJuices] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setJuices(data.getAllJuices);
    }
  }, [loading, data]);

  const totalJuices = juices.length;
  const indexOfLastProduct = currentProduct * viewPerProduct;
  const indexOfFirstProduct = indexOfLastProduct - viewPerProduct;

  const currentJuice = juices.slice(indexOfFirstProduct, indexOfLastProduct);

  function shouldDisplaySingleJuice() {
    return window.innerWidth <= 576;
  }

  return (
    <>
    <div className="landing-juices-container">
      <div className="landing-juices-list">
        {loading ? (
          <p>Loading...</p>
        ) : totalJuices > 0 ? (
          currentJuice.map((juice) => (
            <div key={juice._id} className="landing-juice-item">
              <img src={juice.image}></img>
              <h5>{juice.brand}</h5>
              <h5>{juice.flavor}</h5>
              <h5>${juice.price.toFixed(2)}</h5>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No juices available.</p>
        )}
      </div>
    </div>

    <div className="pagination-container">
      <PaginationSet
        current={currentProduct}
        onChange={setCurrentProduct}
        total={totalJuices}
        productSize={viewPerProduct}
        showQuickJumper={false}
      />
    </div>
    </>
  );
}

export default Juices;

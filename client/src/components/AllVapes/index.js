import './style.css';
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_VAPES } from "../../utils/queries";

function AllVapes() {
  const { loading, data } = useQuery(QUERY_ALL_VAPES);
  const [vapes, setVapes] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setVapes(data.getAllVapes);
    }
  }, [loading, data]);

  const totalVapes = vapes.length;

  return (
    <div className="vapes-container">
      <div className="vapes-list">
        {loading ? (
          <p>Loading...</p>
        ) : totalVapes > 0 ? (
          vapes.map((vape) => (
            <div key={vape._id} className="vape-item">
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
  );
}

export default AllVapes;

import './style.css';
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_JUICES } from "../../utils/queries";

function AllJuices() {
  const { loading, data } = useQuery(QUERY_ALL_JUICES);
  const [juices, setJuices] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setJuices(data.getAllJuices);
    }
  }, [loading, data]);

  const totalJuices = juices.length;

  return (
    <div className="juices-container">
      <div className="juices-list">
        {loading ? (
          <p>Loading...</p>
        ) : totalJuices > 0 ? (
          juices.map((juice) => (
            <div key={juice._id} className="juice-item">
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
  );
}

export default AllJuices;

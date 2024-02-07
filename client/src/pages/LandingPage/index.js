import React, { useEffect } from "react";
import Vapes from "../../components/Vapes/index";
import Juices from "../../components/Juices";
import styled from "styled-components";

const ProductLists = styled.div`
  margin: 20px 0px;
`;

function LandingPage() {
  useEffect(() => {
    alert('hi');
  }, []);

  return (
    <>
      <ProductLists>
        <Vapes />
      </ProductLists>
      <ProductLists>
        <Juices />
      </ProductLists>
    </>
  );
}

export default LandingPage;

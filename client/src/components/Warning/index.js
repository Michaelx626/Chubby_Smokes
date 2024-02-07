import React from 'react';
import styled from 'styled-components';

const Warning = styled.div`
  border-style: solid;
  border-width: 5px;
  border-color: black;
  padding-top: 22px;
  padding-bottom: 21px;
  text-align: center;
`;

const WarningText = styled.span`
  line-height: 25px;
  font-weight: 900;
  font-size: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  color: red;
`;

function Warnings() {
  return (
    <Warning>
        <WarningText>
          👉 WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL. 👈
        </WarningText>
    </Warning>
  );
};

export default Warnings;
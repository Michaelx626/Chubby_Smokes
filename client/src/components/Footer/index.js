import React from 'react';
import styled from 'styled-components';
import yelp from '../../images/yelp.webp';
import instagram from '../../images/instagram.webp';
import facebook from '../../images/facebook.png';

const FooterStyle = styled.footer`
  position: 'fixed';
  bottom: 0;
  width: 100%;
  padding: 20px;
  margin: 0;
`;

const SeparationBorder = styled.p`
  border-width: 0.5px;
  border-style: solid;
`;

const StoreTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  font-family: fantasy;
`;

const InfoText = styled.span`
  padding-right: 10px;
`;

const SocialMediaIcon = styled.span`
  padding-right: 10px;
  img {
    width: 15%;
    height: auto;
  }
`;

const MarginInfo = styled.h5`
  margin: 20px 0px;
`

const CenteredCopyRight = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <>
    <SeparationBorder></SeparationBorder>
    <FooterStyle>
      <div className="footer-top">
        <div className="container">
          <div className="row show-grid">
            <div className="col-sm-4">
              <StoreTitle>Chubby Smoke</StoreTitle>
              <SocialMediaIcon><img src={yelp} alt="yelp icon"></img></SocialMediaIcon>
              <SocialMediaIcon><img src={instagram} alt="yelp icon"></img></SocialMediaIcon>
              <SocialMediaIcon><img src={facebook} alt="yelp icon"></img></SocialMediaIcon>
              <MarginInfo><InfoText>☎️</InfoText>(626)-123-4567</MarginInfo>
              <MarginInfo><InfoText>📧</InfoText>chubbysmoke@gmail.com</MarginInfo>
              <MarginInfo><InfoText>📍</InfoText>1234 Euclid Ave.</MarginInfo>
              <MarginInfo><InfoText></InfoText>San Gabriel, CA 91776</MarginInfo>
              <MarginInfo><InfoText>⏱️</InfoText>10AM - 8PM</MarginInfo>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
    <SeparationBorder></SeparationBorder>
    <CenteredCopyRight>Chubby Smoke Inc. © 2023 | All Rights Reserved.</CenteredCopyRight>
    </>
  );
};

export default Footer
import styled from 'styled-components';
import {Link as LinkScroll} from 'react-router-dom';

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: -1;  
`;


export const HomeBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(to top, #351142, #38144a, #3a1753, #3b1a5c, #3b1e66, #341f64, #2d1f62, #261f60, #191b51, #0d1642, #061033, #010525);
  `;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding:  60px 24px 0 24px;
  display: flex;
  gap: 120px;
  align-items: center;
  justify-content: center;
  
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 30px;    
  }  
`;

export const HomeText = styled.div`
  margin-top: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;  
`;


export const HomeHeading = styled.p`
  color: #fff;
  padding-top:70px;
  font-size:21px ;

  
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HomePara = styled.div`
  margin-top: 24px;
  max-width: 600px;
  justify-items: center;

`;

export const HomeH1 = styled.h1`
  font-weight: bold;
  color: #fff;
  font-size: 38px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 25px;
    text-align: start;
  }

  @media screen and(max-width: 480px) {
    font-size:18px;
    text-align: start;
  }
`;

export const HomeP = styled.p`
  font-weight: normal;
  color: #fff;
  padding-left: 8px;  
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  `;


export const HomeButton = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #7a47e5;
    transform: scale(1.1);
  }

  &.active {
    border-bottom: 3px solid #7a47e5;
  }
`;


export const HomeImgWrapper = styled.div`

`;

export const HomeImg = styled.img`
  height: 600px;
  width: 450px;
  animation: moveUpDown 2s infinite;


  @media screen and (max-width: 768px) {
    height: 400px;
    width: 350px;
  }

  @media screen and(max-width: 480px) {
    height: 200px;
    width: 190px;
  }


  
`;

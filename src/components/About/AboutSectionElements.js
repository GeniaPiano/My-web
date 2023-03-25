import styled from 'styled-components';
import {Link} from "react-scroll";


export const AboutContainer = styled.div`
 
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutBackground = styled.div`
  background-image: linear-gradient(to bottom, #351142, #38144a, #3a1753, #3b1a5c, #341f64, #2d1f62, #261f60, #191b51, #0d1642, #061033, #010525);
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
  z-index: 1;
  padding: 0  24px;
  align-items: center;
  text-align: center;
  

  @media screen and(max-width: 768px){
   flex-direction: column;
  }
`;


export const AboutContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding:  60px 24px 0 24px;
  display: flex;
  gap: 120px;
  align-items: center;
  justify-content: flex-start;
  
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 30px 15px 10px 15px;    
  }  
 `;

export const AboutImgWrapper = styled.div`

`;

export const AboutImg = styled.img`
  height: 400px;
  width: 320px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 320px;
  }

  @media screen and(max-width: 480px) {
    height: 200px;
    width: 150px;
  }
    
`;


export const AboutBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;



  `;

export const AboutText = styled.div`
`;

export const AboutH1  = styled.h1`
`;

export const AboutP = styled.p``;




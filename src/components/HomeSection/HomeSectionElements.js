import styled, { keyframes } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';



export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;  
`;


export const HomeBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(to top, #351142, #38144a, #3a1753, #3b1a5c, #3b1e66, #341f64, #2d1f62, #261f60, #191b51, #0d1642, #061033, #010525);
  `



export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding:  60px 24px 0 24px;
  display: flex;
  gap: 120px;
  align-items: center;
  justify-content: flex-start;
  
  
  @media screen and (max-width: 908px) {
    flex-direction: column;
    gap: 0;
    padding: 30px 15px 10px 15px;    
  }  
`;

export const HomeText = styled.div`
  margin-top: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;  
`;

export const HomeH1 = styled.h1`
  font-weight: bold;
  color: #fff;
  font-size: 50px;
  text-align: start;
  
  @media screen and (max-width: 768px) {
    font-size: 35px;
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
  color: #010606;
  z-index: 1111;
  display: flex;
  background-image: linear-gradient(to right, #a28ad9, #7538f6);
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }



`;


export const HomeImgWrapper = styled.div`
   transition: 0.3s ease-in-out;
    
  
`;

const move = keyframes`
  0%, 100% {
    transform: translateY(50px);    
  }  
 40% {
   transform: rotate(10deg);
 } 
 60% {
    transform: translateY(0px);
  }

`;

export const HomeImg = styled.img`
  height: 600px;
  width: 450px;
  animation: ${move} 5s linear infinite;
  
 

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 350px;
  }

  @media screen and(max-width: 480px) {
    height: 200px;
    width: 190px;
  }    
`;




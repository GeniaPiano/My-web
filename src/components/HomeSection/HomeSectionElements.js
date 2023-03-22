import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md";
import {Link} from 'react-router-dom';

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: -1;  
  //:before{
  //  content: '';
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  right: 0;
  //  bottom: 0;
  //  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
  //  linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  //  z-index:2;
  //  
  //}
  //
`;



export const HomeBackground = styled.div`
  position: absolute;
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
  padding:  8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const HomeH1 = styled.h1`
  color: #fff;
  padding-top:70px;
  font-size: 48px ;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomePara = styled.p`
  margin-top: 24px;
  max-width: 600px;

`;

export const HomeSpan1 = styled.span`
   font-weight: bold;
  color: #fff;
  font-size: 24px;
  text-align: center;


  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and(max-width: 480px) {
    font-size:18px;
  }
`;

export const HomeSpan2 = styled.span`
  font-weight: normal;
  color: #fff;
  padding-left: 8px;  
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const ArrowForward = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

// export const HomeButton = styled(Link)`
//   border-radius: 50px;
//   background: #8d3eda;
//   white-space: nowrap;
//   padding: 14px 48px;
//   color: #010606;
//   font-size:20px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;
//
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     opacity: 0.8;
//     color: #9f61dc;
//   }
//
//   @media screen and (max-width: 748px) {
//     padding: 12px 30px;
//     font-size: 16px;
//   }
// `;

export const HomeButton = styled(Link)`
  border-radius: 50px;
  background: #9451d5;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #b183de;
    color: #010606;
  }
`;
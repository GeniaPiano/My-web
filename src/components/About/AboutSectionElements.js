import styled from 'styled-components';


export const AboutContainer = styled.div`
 
  color:black;
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
  //background-image: linear-gradient(to bottom, #351142, #38144a, #3a1753, #3b1a5c, #341f64, #2d1f62, #261f60, #191b51, #0d1642, #061033, #010525);
  background: #fff;
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

  @media screen and (max-width: 9000px) {
    gap:80px;
   justify-content: space-between;
    padding: 30px 50px 10px 50px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap:20px ;
    padding: 30px 15px 10px 15px;    
  }  
 `;

export const AboutImgWrapper = styled.div`

`;

export const AboutImg = styled.img`
  height: 400px;
  width: 280px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 270px;
  }

  @media screen and(max-width: 480px) {
    height: 200px;
    width: 150px;
  }
    
`;


export const AboutBtnWrapper = styled.div`
  margin-top: 40px;


  `;

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const AboutH1  = styled.h1`
    font-size: 45px;
    font-weight: 700;
    margin-top: 10px;
    text-align: end;
  
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const AboutH2 = styled.h2`
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 10px;    
  
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const AboutP = styled.p`
text-align: justify;
`;




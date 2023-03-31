import styled from 'styled-components';


export const AboutContainer = styled.div`

  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px 50px 50px;
  height: 800px;
  position: relative;
  background: #0c0c0c;



  @media screen and (max-width: 900px) {
    padding: 80px 50px;
    min-height: 900px;
  }
  @media screen and (max-width: 768px) {
    min-height: 1100px;
    padding: 50px 0;
  }
`;

export const AboutBackground = styled.div`

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`;

export const AboutWrapper = styled.div`
 

  background: #151d25;
  border-radius: 30px;
  padding: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  
  @media screen and (max-width: 900px){
    gap:50px;
    padding: 50px;
  }

  @media screen and (max-width: 768px){
   flex-direction: column;
    padding: 20px 20px 30px 20px;
  }



`;


export const AboutImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:35px;

 
  `;

export const AboutImg = styled.img`
  height: 380px;
  width: 280px;
  border-radius: 20px;

  

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 290px;
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
    align-items: center;
    justify-content:center;

  
  @media screen and (max-width:1100px) {
    font-size: 14px;
  }
  @media screen and (max-width:768px) {
    justify-content: center;
    align-items: center;
  
  }
`;

export const AboutH1  = styled.h1`
    font-size: 45px;
    font-weight: 700;
    margin-top: 10px;
   
  
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




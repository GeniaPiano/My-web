import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"

export const ContactContainer = styled.div`
  padding-top: -80px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 900px) {
    height: 600px;
  }

  @media screen and (max-width: 768px) {
    height: 500px;
  }

 
`;

export const ContactBackground = styled.div`
  background: #151d25;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;  
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const ContactH1 = styled.h1`
  font-size: 35px;
  margin-bottom: 40px;
  color: #fff;
   span{
     color:  #a28ad9;
   }

  @media screen and (max-width: 900px) {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

`;



export const ContactList = styled.div`
  margin-top: 50px;
  color: #fff;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
 
  
  a{
    text-decoration: none;
  }


  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;

  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  

`;



export const ContactLi = styled.div`
    color: #fff;
    border: solid 2px #fff;
    border-radius: 30px;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 40px;   
    transition: 0.3s ease-in-out;
    cursor: pointer;
   
  &:hover{
    color:#a28ad9;
    border-color: #a28ad9;
    
  }
    
  
`;

export const ContactLinkedInIcon = styled(FaLinkedin)`
  
    width:25px;
    height:25px;
    transition: 0.3s ease;
  
    &:hover{
      transform: rotateY(720deg);
    }
`;

export const ContactMailIcon = styled(FaEnvelope)`
    
    width:25px;
    height:25px;
    transition: 0.3s ease;

    &:hover{
      transform: rotateY(720deg);
    }
`;

export const ContactTextItem = styled.div`
    text-align: center;
    font-size:18px;   
    
  
`;

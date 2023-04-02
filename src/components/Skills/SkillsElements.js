import styled  from 'styled-components';

export const SkillsContainer = styled.div`

 height: 800px;
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: start;
 position: relative;
 padding: 30px 50px;

 @media screen and (max-width: 900px) {
  padding: 30px 50px;
  min-height: 900px;
 
 }

 @media screen and (max-width: 768px) {
  min-height: 900px;
  padding: 10px 0;
 }

`;

export const SkillsBackground = styled.div`    
    color: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;

export const SkillsWrapper = styled.div`

  background: #151d25;
  border-radius: 30px;
  padding: 10px 40px; 
 
`;




export const SkillsHeading = styled.h1`
 padding: 20px
`;



export const SkillsH3 = styled.h3`
 margin-top: 20px;
 margin-bottom: 30px;
 text-align: center;
 
`;

export  const SkillsAlleBoxes = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-evenly;

 @media screen and (max-width: 900px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
 }
  
  
`;

export const SkillsBox = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;

 @media screen and (max-width: 768px) {
 padding-bottom: 0;
 }
 
 
 
`;



 export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 900px) {
   display: grid;
   grid-template-columns: 1fr 1fr;
  }

 

  
 `;

export const SkillsItemLi = styled.li`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #a28ad9, #7538f6, #7d16b7);
  padding: 11px 28px;
  border-radius: 30px;
 

  @media screen and (max-width: 900px) {
    padding: 15px 25px;
  }

 @media screen and (max-width: 768px) {
  padding: 7px 10px;
 }


`;


 export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  margin: 20px;
 `;
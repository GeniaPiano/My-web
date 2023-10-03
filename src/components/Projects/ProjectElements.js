import styled from "styled-components";


export const ProjectsContainer = styled.div`
  padding-top: -80px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 900px) {
    height: 1200px;
    padding: 0 30px;
  }

  @media screen and (max-width: 768px) {
    height: 1300px;
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    height: 1350px;
    padding: 0;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 30px 0;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }
`;

export const ProjectCard = styled.div`
  background: #151d25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  max-height: 380px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  height: 380px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;


export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

export const ProjectP = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ProjectDivTech = styled.div`
  margin: 20px 10px;
  display: grid;
  grid-template-columns: ${({isColumn}) => (isColumn? '1fr' : '1fr 1fr' )};
  grid-gap: 5px;
  
`;

export const TechName = styled.div`
  padding: 3px 12px;
  color: #a28ad9;
  border-radius: 20px;
  border: solid 2px #a28ad9;
`;

export const ProjectIcons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    
  
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 45px;
  height: 40px;
  border: 2px solid #fff;
  padding: 8px;
  border-radius: 10px;
  
  &:hover {
    color: #fff;
    border-color: #a28ad9;
    background: #a28ad9;
  }

`


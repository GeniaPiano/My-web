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
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 30px 0;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 0;
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  height: 380px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectIcon = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
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
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;

export const TechName = styled.div`
  padding: 3px 12px;
  color: #a28ad9;
  border-radius: 20px;
  border: solid 2px #a28ad9;
`;

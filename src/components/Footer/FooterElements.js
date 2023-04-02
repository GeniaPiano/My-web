import styled from 'styled-components';


export const FooterContainer = styled.div`
    background-color: #101522;
    `;

export const FooterWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
  }
      `;

export const WebsiteRights = styled.small`
  color: #fff;
  display: flex;
  
  @media screen and (max-width: 768px) {
  flex-direction:  column;
  }
  
`

export const FooterDivOne = styled.div`
  
`;

export const FooterDivTwo = styled.div`
  padding-left: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 240px;

`;

export const SocialIconLink = styled.a`
  color: #fff;  
  font-size: 24px;

  &:hover{
    color:#a28ad9;
  }
`;

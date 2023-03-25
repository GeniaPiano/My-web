import styled from 'styled-components';
import { Link as LinkScroll} from 'react-scroll';



export const Nav = styled.nav`
    background: #000;
    height: 80px;
   // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:2;    
    
    @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1100px;
`

export const NavLogo = styled(LinkScroll)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  gap: 5px;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  background-image: linear-gradient(to right, #c1acf1, #6b36da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background-image: linear-gradient(to left, #c1acf1, #6b36da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(102%) ;
  }
`;

export const NavLogoImg = styled.img`
  width: 30px;
  height: 30px;
  

  `;

export const MobileIcon = styled.div`
  display: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #b697fa;
  }


  &:active {
    color: #4f12d3;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style:none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }  
`;

export const NavItem = styled.li`
  height: 80px;  
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #7a47e5;
    transform: scale(1.1);
  }

  &.active {
    border-bottom: 3px solid #7a47e5;
  }
`;





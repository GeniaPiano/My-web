import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavLogoImg
} from "./NavbarElements";
import LogoIcon from '../../images/logo-icon.svg';
import {animateScroll as scroll} from "react-scroll";


const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <NavLogoImg src={LogoIcon} />   <span>Eugenia</span>
                        </NavLogo>
                        <MobileIcon onClick={toggle} >
                              <FaBars />
                        </MobileIcon>
                        <NavMenu>
                             <NavItem>
                                <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                    About
                                </NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='skills'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                    Skills
                                </NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='projects'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                    Projects
                                </NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavBtnLink to='contact'>
                                    Contact
                                </NavBtnLink>
                             </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </>
        );
    }


export default Navbar;
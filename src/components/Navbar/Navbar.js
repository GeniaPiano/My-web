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
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
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
                                    Travel
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
                                <NavLinks to='offer'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                    Offer
                                </NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                    Services
                                </NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                    Sign up
                                </NavLinks>
                             </NavItem>
                        </NavMenu>
                        <NavBtn>
                         <NavBtnLink to='signin'>Sign in</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </>
        );
    }


export default Navbar;
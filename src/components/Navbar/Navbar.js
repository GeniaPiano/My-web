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
                                    Eugenia
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
                        {/*<NavBtn>*/}
                        {/* <NavBtnLink to='signin'> Contact </NavBtnLink>*/}
                        {/*</NavBtn>*/}
                    </NavbarContainer>
                </Nav>
            </>
        );
    }


export default Navbar;
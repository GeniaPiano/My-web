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
    NavLogoImg
} from "./NavbarElements";

import Logo from "../Logo/Logo";


const Navbar = ({ toggle }) => {

        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <Logo />
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
                                 <NavLinks to='contact'
                                           smooth={true}
                                           duration={500}
                                           spy={true}
                                           exact='true'
                                           offset={-80}>
                                     Contact
                                 </NavLinks>
                             </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </>
        );
    }


export default Navbar;
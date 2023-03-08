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


const Navbar = ({ toggle }) => {

        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                                    genia
                        </NavLogo>
                        <MobileIcon onClick={toggle} >
                              <FaBars />
                        </MobileIcon>
                        <NavMenu>
                             <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='skills'>Skills</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='projects'>Projects</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='signup'>Sign up</NavLinks>
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
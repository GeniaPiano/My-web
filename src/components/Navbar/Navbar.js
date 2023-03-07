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


const Navbar = () => {

        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                                    genia
                        </NavLogo>
                        <MobileIcon>
                              <FaBars />
                        </MobileIcon>
                        <NavMenu>
                             <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='projects'>Projects</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='contact'>Contact</NavLinks>
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
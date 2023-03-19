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
                                    Travel
                        </NavLogo>
                        <MobileIcon onClick={toggle} >
                              <FaBars />
                        </MobileIcon>
                        <NavMenu>
                             <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='offer'>Offer</NavLinks>
                             </NavItem>
                             <NavItem>
                                <NavLinks to='services'>Services</NavLinks>
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
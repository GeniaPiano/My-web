import React from 'react';
import {
    CloseIcon,
    Icon, SidebarBtn,
    SidebarBtnWrap,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
} from "./SideBarElements";

import PropTypes from 'prop-types';

const SideBar = ({isOpen, toggle, scrollToRef, aboutRef, skillsRef, projectsRef, contactRef}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'
                                 onClick={() => scrollToRef(aboutRef)}
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-80}>
                        About
                    </SidebarLink>
                    <SidebarLink to="skills"
                                 onClick={() => scrollToRef(skillsRef)}
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-80}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="projects"
                                 onClick={() => scrollToRef(projectsRef)}
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-80}>
                        Projects
                    </SidebarLink>

                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarBtn to="contact"
                                onClick={()=> scrollToRef(contactRef)}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={80}>
                        Contact
                    </SidebarBtn>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}



SideBar.propTypes = {
    scrollToRef: PropTypes.func.isRequired,
};

export default SideBar;
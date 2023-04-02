import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    SocialIcons,
    SocialIconLink,
    WebsiteRights, FooterDivOne, FooterDivTwo,

} from "./FooterElements";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {


    return (
        <FooterContainer>
            <FooterWrapper>


                <Logo />
                <WebsiteRights >
                    <FooterDivOne>
                        Build by Eugenia ©  {new Date().getFullYear()}
                    </FooterDivOne>
                    <FooterDivTwo>
                        All rights reserved.
                    </FooterDivTwo>
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href="https://github.com/GeniaPiano/GeniaPiano" target="_blank"
                                            aria-label="Github">
                             <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/eugenia-kwon-kominek-5892a3242/" target="_blank"
                                            aria-label="Linkedin">
                                <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>




            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
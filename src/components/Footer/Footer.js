import React from 'react';
import {animateScroll as scroll} from "react-scroll";
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights, WebsiteRightsSpan

} from "./FooterElements";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to ="signin">Insurances</FooterLink>
                                <FooterLink to ="signin">Careers</FooterLink>
                                <FooterLink to ="signin">Terms of Services</FooterLink>
                                <FooterLink to ="signin">Testimonials</FooterLink>
                                <FooterLink to ="signin">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to ="signin">Insurances</FooterLink>
                            <FooterLink to ="signin">Careers</FooterLink>
                            <FooterLink to ="signin">Terms of Services</FooterLink>
                            <FooterLink to ="signin">Testimonials</FooterLink>
                            <FooterLink to ="signin">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to ="signin">Insurances</FooterLink>
                            <FooterLink to ="signin">Careers</FooterLink>
                            <FooterLink to ="signin">Terms of Services</FooterLink>
                            <FooterLink to ="signin">Testimonials</FooterLink>
                            <FooterLink to ="signin">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to ="signin">Insurances</FooterLink>
                            <FooterLink to ="signin">Careers</FooterLink>
                            <FooterLink to ="signin">Terms of Services</FooterLink>
                            <FooterLink to ="signin">Testimonials</FooterLink>
                            <FooterLink to ="signin">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={toggleHome()}>
                            Eugenia
                        </SocialLogo>
                        <WebsiteRights >
                          Build by Eugenia ©  {new Date().getFullYear()}
                            <WebsiteRightsSpan>All rights reserved.</WebsiteRightsSpan>
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//github.com/GeniaPiano" target="_blank"
                                            aria-label="Github">
                             <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/eugenia-kwon-kominek-5892a3242/" target="_blank"
                                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
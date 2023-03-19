import React from 'react';
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
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
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
                        <SocialLogo to='/'>
                            Travel
                        </SocialLogo>
                        <WebsiteRights>
                           Travel ©  {new Date().getFullYear()}
                            <WebsiteRightsSpan>All rights reserved.</WebsiteRightsSpan>
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank"
                                            aria-label="Facebook">
                             <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank"
                                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
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
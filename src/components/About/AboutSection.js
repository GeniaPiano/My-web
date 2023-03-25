import React from 'react';

import {
    AboutBackground, AboutBtnWrapper,
    AboutContainer, AboutContent, AboutH1, AboutImg, AboutImgWrapper, AboutP, AboutText
} from "./AboutSectionElements";

import Img from'../../images/img1.png'
import {Button} from "../ButtonElement/ButtonElement";



const AboutSection = ({ aboutRef }) => {

    return (
             <AboutContainer id='about' ref={aboutRef}>
                 <AboutBackground>
                     <AboutContent>
                         <AboutImgWrapper>
                             <AboutImg src={Img} alt={''}></AboutImg>
                         </AboutImgWrapper>
                         <AboutText>
                             <AboutH1> About me </AboutH1>
                             <AboutP>Lorem ipsum........photographer & pianist</AboutP>
                             <AboutBtnWrapper>
                                 <Button to='skills'>See skills</Button>
                             </AboutBtnWrapper>

                         </AboutText>
                     </AboutContent>
                 </AboutBackground>
             </AboutContainer>
     )
}


export default AboutSection;
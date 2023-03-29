import React from 'react';

import {
    AboutBackground, AboutBtnWrapper,
    AboutContainer, AboutContent, AboutH1, AboutH2, AboutImg, AboutImgWrapper, AboutP, AboutText
} from "./AboutSectionElements";

import Img from'../../images/img2.jpg'
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
                             <AboutH2>I love building stuff</AboutH2>
                             <AboutP>
                                 I was always fascinated in technology. Since I was given my first own computer at age 12 I started to play with available technologies that allowed me to work on graphics, photography, composing, recording and mixing music, sound engineering, automation and recently programming.
                                 My artistic education helped me to be creative and my curiosity and willingness to learn about technical innovations helped me to learn programming.
                                 In my professional life, I combine two directions: artistic and technical.
                                 In my current job I use all my technical skills such as photography, graphics, automation.
                             </AboutP>
                             <AboutBtnWrapper>
                                 <Button to='skills'>My skills</Button>
                             </AboutBtnWrapper>
                         </AboutText>
                     </AboutContent>
                 </AboutBackground>
             </AboutContainer>
     )
}


export default AboutSection;
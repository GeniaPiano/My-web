import React from 'react';

import {
    AboutBackground, AboutBtnWrapper,
    AboutContainer, AboutH1, AboutH2, AboutImg, AboutImgWrapper, AboutP, AboutText, AboutWrapper
} from "./AboutSectionElements";

import Img from'../../images/img2.jpg'
import {Button} from "../ButtonElement/ButtonElement";



const AboutSection = ({ aboutRef }) => {

    return (
             <AboutContainer id='about' ref={aboutRef}>
                 <AboutBackground>
                    <AboutWrapper>

                            <AboutImgWrapper>
                                <AboutImg src={Img} alt={''}></AboutImg>
                            </AboutImgWrapper>
                            <AboutText>
                                <AboutH1> About me </AboutH1>
                                <AboutH2>I love building stuff</AboutH2>
                                <AboutP>
                                    I have always been fascinated by technology. Things related to it have always accompanied me, despite my artistic education.
                                    I am a pianist by profession, with numerous performances on stages.
                                    But I am passionate about graphics, photography, recording and mixing music,
                                    automation and recently programming. This allowed me to find a harmonious
                                    balance between logic and creativity.
                                </AboutP>
                                <AboutBtnWrapper>
                                    <Button to='skills'
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact='true'
                                            offset={-80}
                                    >My skills</Button>
                                </AboutBtnWrapper>
                            </AboutText>

                    </AboutWrapper>
                 </AboutBackground>
             </AboutContainer>
     )
}


export default AboutSection;
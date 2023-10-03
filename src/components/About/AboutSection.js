import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';


import {
    AboutBackground, AboutBtnWrapper,
    AboutContainer, AboutH1, AboutH2, AboutImg, AboutImgWrapper, AboutP, AboutText, AboutWrapper
} from "./AboutSectionElements";

// import Img from'../../images/img2.jpg'
//import Img from '../../images/my-photo2.jng'
import Img from '../../images/my-photo2.jpg'
import { Button } from "../ButtonElement/ButtonElement";



const AboutSection = ({ aboutRef }) => {
    useEffect(()=> {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        })
    },[])

    return (
             <AboutContainer id='about' ref={aboutRef} >
                 <AboutBackground>
                    <AboutWrapper >

                            <AboutImgWrapper data-aos="fade-up">
                                <AboutImg src={Img} alt={''}></AboutImg>
                            </AboutImgWrapper>

                            <AboutText data-aos="fade-up">
                                <AboutH1> About me </AboutH1>
                                <AboutH2>I love building stuff</AboutH2>
                                <AboutP>
                                    I have always been fascinated by technology. Things related to it have accompanied me all the time, despite my artistic education.
                                    I am a pianist by profession, with numerous performances on stages.
                                    But I am passionate about graphics, photography, recording and mixing music,
                                    automation and recently programming. This allowed me to find a harmonious
                                    balance between logic and creativity, that is significant to become a programmer.
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
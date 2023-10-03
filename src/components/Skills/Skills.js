import React, {useEffect} from  'react';
import "aos/dist/aos.css";
import Aos from 'aos';

import {
    SkillsBackground,
    SkillsContainer,
    SkillsHeading,
    SkillsBox,
    SkillsItemLi, SkillsList,
    SkillsH3,
    SkillsWrapper, ButtonWrapper, SkillsAlleBoxes,

} from './SkillsElements';
import { ButtonTransparent } from "../ButtonElement/ButtonTransparent";
import {backTech, frontTech, other} from "./techData";






const SkillsSection = ({ skillsRef }) => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            });
    },[])

    return  (
        <SkillsContainer id='skills' ref={skillsRef}>
            <SkillsBackground>
                <SkillsWrapper>
                    <SkillsHeading>Skills</SkillsHeading>
                    <SkillsAlleBoxes>
                        <SkillsBox data-aos="fade-up">
                            <SkillsH3>
                                Frontend
                            </SkillsH3>
                            <SkillsList>
                                {frontTech.map((el)=> {
                                    return <SkillsItemLi >{el}</SkillsItemLi>
                                })}
                            </SkillsList>
                        </SkillsBox>

                        <SkillsBox data-aos="fade-up">
                            <SkillsH3>
                                Backend
                            </SkillsH3>
                            <SkillsList>
                                {backTech.map((el)=> {
                                    return <SkillsItemLi >{el}</SkillsItemLi>
                                })}
                            </SkillsList>
                        </SkillsBox>

                        <SkillsBox data-aos="fade-up">
                            <SkillsH3>
                                Other
                            </SkillsH3>
                            <SkillsList>
                                {other.map((el)=> {
                                    return <SkillsItemLi >{el}</SkillsItemLi>
                                })}
                            </SkillsList>
                        </SkillsBox>
                    </SkillsAlleBoxes>

                    <ButtonWrapper>
                        <ButtonTransparent to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                        >See my projects</ButtonTransparent>
                    </ButtonWrapper>

                </SkillsWrapper>
            </SkillsBackground>
        </SkillsContainer>

    )
}

export default SkillsSection;
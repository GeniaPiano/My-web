import React from  'react';
import {
    SkillsBackground,
    SkillsContainer,
    SkillsHeading,
    SkillsBox,
    SkillsItemLi, SkillsList,
    SkillsH3,
    SkillsWrapper, ButtonWrapper, SkillsAlleBoxes,

} from './SkillsElements';
import {ButtonTransparent} from "../ButtonElement/ButtonTransparent";

const frontTech = ['Html', 'Css', 'Javascript', 'React','RWD', 'Bootstrap'];
const backTech = ['NodeJs', 'ExpressJs', 'HandleBars', 'SQL', 'PhpMyAdmin','MongoDb'];
const other = ['Git', 'Gthub', 'npm', 'HeidiSql', 'Photography', 'Photofiltre'];



const SkillsSection = ({ skillsRef }) => {
    return  (
        <SkillsContainer id='skills' ref={skillsRef}>
            <SkillsBackground>
                <SkillsWrapper>
                    <SkillsHeading>Skills</SkillsHeading>
                    <SkillsAlleBoxes>
                        <SkillsBox>
                            <SkillsH3>
                                Frontend
                            </SkillsH3>
                            <SkillsList>
                                {frontTech.map((el)=> {
                                    return <SkillsItemLi >{el}</SkillsItemLi>
                                })}
                            </SkillsList>
                        </SkillsBox>

                        <SkillsBox>
                            <SkillsH3>
                                Backend
                            </SkillsH3>
                            <SkillsList>
                                {backTech.map((el)=> {
                                    return <SkillsItemLi>{el}</SkillsItemLi>
                                })}
                            </SkillsList>
                        </SkillsBox>

                        <SkillsBox>
                            <SkillsH3>
                                Other
                            </SkillsH3>
                            <SkillsList>
                                {other.map((el)=> {
                                    return <SkillsItemLi>{el}</SkillsItemLi>
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
import React from  'react';
import {
    SkillsBackground,
    SkillsContainer,
    SkillsHeading,
    SkillsBox,
    SkillsItemDiv, SkillsList,
    SkillsH3,
    SkillsWrapper, ButtonWrapper

} from './SkillsElements';
import {ButtonTransparent} from "../ButtonElement/ButtonTransparent";

const SkillsSection = ({ skillsRef }) => {
    return  (
        <SkillsContainer id='skills' ref={skillsRef}>
            <SkillsBackground>
                <SkillsWrapper>
                    <SkillsHeading>Skills</SkillsHeading>

                        <SkillsBox>
                            <SkillsList>
                                <SkillsItemDiv>
                                        HTML
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                       CSS5
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                      Javascript
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    Bootstrap
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    React
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    RWD
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    NodeJs
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    ExpressJs
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    HandleBars
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    Sql
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                     MongoDb
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    Git
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    Github
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    Npm
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    PhpMyAdmin
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                        Photography
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                        Photofiltre
                                </SkillsItemDiv>

                            </SkillsList>



                        </SkillsBox>

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
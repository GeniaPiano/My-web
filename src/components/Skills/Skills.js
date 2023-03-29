import React from  'react';
import {
    SkillsBackground,
    SkillsContainer,
    SkillsHeading,
    SkillsBox,
    SkillsIcon,
    SkillsIconsContainer,
    SkillsItemDiv, SkillsList,
    SkillsName,
    SkillsH3,
    SkillsWrapper

} from './SkillsElements';
import {Button} from "../ButtonElement/ButtonElement";
import { FaReact, FaCss3,FaHtml5, FaJs, FaNodeJs, FaDatabase,  } from "react-icons/fa";

const SkillsSection = ({ skillsRef }) => {
    return  (
        <SkillsContainer id='skills' ref={skillsRef}>
            <SkillsBackground>
                <SkillsWrapper>
                    <SkillsHeading>Skills</SkillsHeading>
                    <SkillsIconsContainer>


                        <SkillsBox>

                            <SkillsH3>Frontend </SkillsH3>
                            <SkillsList>
                                <SkillsItemDiv>
                                    <SkillsIcon>
                                        HTML
                                    </SkillsIcon>
                                    <SkillsName>
                                        HTML
                                    </SkillsName>
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    <SkillsIcon>
                                        CSS5
                                    </SkillsIcon>
                                    <SkillsName>
                                        CSS5
                                    </SkillsName>
                                </SkillsItemDiv>


                            <SkillsItemDiv>
                                <SkillsIcon>
                                    Javascript
                                </SkillsIcon>
                                <SkillsName>
                                    Javascript
                                </SkillsName>
                            </SkillsItemDiv>

                            <SkillsItemDiv>
                                <SkillsIcon>
                                    React
                                </SkillsIcon>
                                <SkillsName>
                                    React
                                </SkillsName>
                            </SkillsItemDiv>
                           </SkillsList>
                        </SkillsBox>

                        <SkillsBox>

                        <SkillsH3>Backend </SkillsH3>
                        <SkillsList>
                            <SkillsItemDiv>
                                <SkillsIcon>
                                    NODEJS
                                </SkillsIcon>
                                <SkillsName>
                                    NodeJs
                                </SkillsName>
                            </SkillsItemDiv>

                            <SkillsItemDiv>
                                <SkillsIcon>
                                    Express
                                </SkillsIcon>
                                <SkillsName>
                                    ExpressJs
                                </SkillsName>
                            </SkillsItemDiv>

                        <SkillsItemDiv>
                            <SkillsIcon>
                                HandleBars
                            </SkillsIcon>
                            <SkillsName>
                                HandleBars
                            </SkillsName>
                        </SkillsItemDiv>

                        <SkillsItemDiv>
                            <SkillsIcon>
                                Sql
                            </SkillsIcon>
                            <SkillsName>
                                Sql
                            </SkillsName>
                        </SkillsItemDiv>


                        <SkillsItemDiv>
                            <SkillsIcon>
                                MongoDb
                            </SkillsIcon>
                            <SkillsName>
                                MongoDb
                            </SkillsName>
                        </SkillsItemDiv>
                        </SkillsList>
                    </SkillsBox>

                        <SkillsBox>

                            <SkillsH3>Other </SkillsH3>
                            <SkillsList>
                                <SkillsItemDiv>
                                    <SkillsIcon>
                                        Git
                                    </SkillsIcon>
                                    <SkillsName>
                                        Git
                                    </SkillsName>
                                </SkillsItemDiv>

                                <SkillsItemDiv>
                                    <SkillsIcon>
                                        Github
                                    </SkillsIcon>
                                    <SkillsName>
                                        Github
                                    </SkillsName>
                                </SkillsItemDiv>

                            <SkillsItemDiv>
                                <SkillsIcon>
                                    Photography
                                </SkillsIcon>
                                <SkillsName>
                                    Photography
                                </SkillsName>
                            </SkillsItemDiv>

                            <SkillsItemDiv>
                                <SkillsIcon>
                                    Photofiltre
                                </SkillsIcon>
                                <SkillsName>
                                    Photofiltre
                                </SkillsName>
                            </SkillsItemDiv>
                            </SkillsList>


                        </SkillsBox>






                </SkillsIconsContainer>


                    <Button to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                    >See my projects</Button>
                </SkillsWrapper>
            </SkillsBackground>
        </SkillsContainer>

    )
}

export default SkillsSection;
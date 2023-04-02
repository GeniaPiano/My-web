import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';


import { FaGithub, FaEye } from "react-icons/fa";
import {
    ProjectCard,
    ProjectsContainer,
    ProjectH1,
    ProjectH2,
    ProjectP,
    ProjectIcons,
    ProjectsWrapper, ProjectDivTech, TechName,
    ProjectLink

} from "./ProjectElements";



const Projects = ({ projectsRef }) => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        });
    },[])

    return (
        <ProjectsContainer id="projects" ref={ projectsRef }>
                <ProjectH1>
                    Chosen projects
                </ProjectH1>
                <ProjectsWrapper>
                    <ProjectCard data-aos="fade-up">
                        <ProjectH2>School Menager</ProjectH2>
                        <ProjectP>
                            Helps to manage your language school.
                        </ProjectP>
                        <ProjectDivTech>
                            <TechName>Css</TechName>
                            <TechName>Javascript</TechName>
                            <TechName>Node Js</TechName>
                            <TechName>Express Js</TechName>
                            <TechName>HanldeBars</TechName>
                        </ProjectDivTech>
                        <ProjectIcons>
                            <ProjectLink href="https://github.com/GeniaPiano/School-menager" target="_blank">
                                <FaGithub/>
                            </ProjectLink>

                            <ProjectLink href="https://school-menager--geniapiano.repl.co/school" target="_blank">
                                <FaEye/>
                            </ProjectLink>
                        </ProjectIcons>
                    </ProjectCard>

                    <ProjectCard data-aos="fade-up">
                        <ProjectH2>Personal Portfolio Project</ProjectH2>
                        <ProjectP>
                            Website about me
                        </ProjectP>
                        <ProjectDivTech isColumn={true}>
                            <TechName>React</TechName>
                            <TechName>Styled components</TechName>
                        </ProjectDivTech>
                        <ProjectIcons>
                            <ProjectLink href="https://github.com/GeniaPiano/Portfolio" target="_blank">
                                <FaGithub/>
                            </ProjectLink>

                            <ProjectLink href="" target="_blank">
                                <FaEye/>
                            </ProjectLink>
                        </ProjectIcons>
                    </ProjectCard>

                    <ProjectCard data-aos="fade-up">
                        <ProjectH2>Tasks Saver</ProjectH2>
                        <ProjectP>
                            Can save your tasks.
                        </ProjectP>
                        <ProjectDivTech>
                            <TechName>Css</TechName>
                            <TechName>Javascript</TechName>
                            <TechName>Node Js</TechName>
                            <TechName>Express Js</TechName>
                        </ProjectDivTech>
                        <ProjectIcons>
                            <ProjectLink href="https://replit.com/@GeniaPiano/To-do-list" target="_blank">
                                <FaGithub/>
                            </ProjectLink>

                            <ProjectLink href="https://replit.com/@GeniaPiano/To-do-list" target="_blank">
                                <FaEye/>
                            </ProjectLink>
                        </ProjectIcons>

                    </ProjectCard>
                </ProjectsWrapper>
        </ProjectsContainer>

    )

}

export default Projects;
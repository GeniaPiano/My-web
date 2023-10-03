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
import {projectData} from "./projectData";



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

                  <> {projectData.map(project => (
                        <ProjectCard data-aos="fade-up" key={project.name}>
                            <ProjectH2>{project.name}</ProjectH2>
                            <ProjectP>
                                {project.headline}
                            </ProjectP>
                            <ProjectDivTech>
                                {project.stack.map(el => <TechName key={el}>{el}</TechName>)}
                            </ProjectDivTech>

                            <ProjectIcons>
                                <ProjectLink href={project.github} target="_blank">
                                    <FaGithub/>
                                </ProjectLink>
                                <ProjectLink href={project.live} target="_blank">
                                     <FaEye/>
                                </ProjectLink>
                            </ProjectIcons>
                        </ProjectCard>
                        ))} </>

                </ProjectsWrapper>
        </ProjectsContainer>

    )

}

export default Projects;
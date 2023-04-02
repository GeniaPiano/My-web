import React from 'react';



import {
    ProjectCard,
    ProjectsContainer,
    ProjectH1,
    ProjectH2,
    ProjectP,
    ProjectIcon,
    ProjectsWrapper, ProjectDivTech, TechName

} from "./ProjectElements";



const Projects = ({ projectsRef }) => {
    return (
        <ProjectsContainer id="projects" ref={ projectsRef }>
                <ProjectH1>
                    Chosen projects
                </ProjectH1>
                <ProjectsWrapper>
                    <ProjectCard>
                        <ProjectH2>School Menager</ProjectH2>
                        <ProjectP>
                            Helps to manage your language school.
                        </ProjectP>
                        <ProjectDivTech>
                            <TechName>Css</TechName>
                            <TechName>Javascript</TechName>
                            <TechName>NodeJs</TechName>
                            <TechName>ExpressJs</TechName>
                            <TechName>HanldeBars</TechName>
                        </ProjectDivTech>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectH2>Personal Portfolio Project</ProjectH2>
                        <ProjectP>
                            Website about me
                        </ProjectP>
                        <ProjectDivTech>
                            <TechName>React</TechName>
                            <TechName>Styled components</TechName>
                        </ProjectDivTech>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectH2>School Menager</ProjectH2>
                        <ProjectP>
                            Helps to manage your language school.
                        </ProjectP>
                        <ProjectDivTech>
                            <TechName>Css</TechName>
                            <TechName>Javascript</TechName>
                            <TechName>NodeJs</TechName>
                            <TechName>ExpressJs</TechName>
                            <TechName>HanldeBars</TechName>
                        </ProjectDivTech>
                    </ProjectCard>
                </ProjectsWrapper>
        </ProjectsContainer>

    )

}

export default Projects;
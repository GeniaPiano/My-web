import React from 'react';
import Img from '../../images/schoool-menager.png'
import Img1  from '../../images/school-menager2.png';


import {
    ProjectCard,
    ProjectsContainer,
    ProjectH1,
    ProjectH2,
    ProjectP,
    ProjectIcon,
    ProjectsWrapper

} from "./ProjectElements";

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
                <ProjectH1>
                    Projects
                </ProjectH1>
                <ProjectsWrapper>
                    <ProjectCard>
                        <ProjectIcon src={Img} />
                        <ProjectH2>School Menager</ProjectH2>
                        <ProjectP>
                            Language School menager.
                            Node Js, Express Js, CSS and HandleBars.
                            It is still in progress but you can have a look at the live preview and see already done functionality.
                        </ProjectP>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectIcon src={Img1} />
                        <ProjectH2>Lorem ipsum....</ProjectH2>
                        <ProjectP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ProjectP>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectIcon src={Img1} />
                        <ProjectH2>Lorem ipsum....</ProjectH2>
                        <ProjectP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ProjectP>
                    </ProjectCard>
                </ProjectsWrapper>
        </ProjectsContainer>

    )

}

export default Projects;
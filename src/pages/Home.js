import React, {useRef, useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import HomeSection from "../components/HomeSection/HomeSection";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/About/AboutSection";
import SkillsSection from "../components/Skills/Skills";
import ContactSection from '../components/ContactSection/ContactSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        toggle();
    };




    return (
        <>
        <SideBar isOpen={isOpen}
                 toggle={toggle}
                 scrollToRef={scrollToRef}
                 aboutRef={aboutRef}
                 skillsRef={skillsRef}
                 projectsRef={projectsRef}
                 contactRef={contactRef}
        />
        <Navbar toggle={toggle}/>
        <HomeSection  toggle={toggle}/>
        <AboutSection aboutRef={aboutRef} />
        <SkillsSection skillsRef={skillsRef}/>
        <Projects projectsRef={projectsRef} />
        <ContactSection contactRef={contactRef}/>
        <Footer />
        </>
    )
}

export default Home;
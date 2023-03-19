import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import HomeSection from "../components/HomeSection/HomeSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";
import Services from "../components/Services/Services";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HomeSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Services />
        </>
    )
}

export default Home;
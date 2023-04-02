
import React from "react";
import {LogoLinked} from "./LogoEelements";
import {animateScroll as scroll} from "react-scroll";


const Logo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <LogoLinked onClick={toggleHome}>
            Eugenia
        </LogoLinked>
    )
}

export default  Logo;

import LogoIcon from "../../images/logo-icon.svg";
import React from "react";
import {LogoImg, LogoLinked} from "./LogoEelements";
import {animateScroll as scroll} from "react-scroll";


const Logo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <LogoLinked onClick={toggleHome}>
            {/*<LogoImg src={LogoIcon} />  */}
            <span>Eugenia</span>
        </LogoLinked>
    )
}

export default  Logo;
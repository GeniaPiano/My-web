import React, {useState} from 'react';
import {
    HomeBackground,
    HomeBtnWrapper,
    HomeContainer,
    HomeContent,
    HomeH1,
    HomePara,
    HomeButton, HomeSpan1, HomeSpan2
} from "./HomeSectionElements";



const HomeSection = () => {
    // const [hover, setHover] = useState(false);
    //
    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <HomeContainer>
            <HomeBackground>
                <HomeContent>
                    <HomeH1>
                      Hi, I am Eugenia
                    </HomeH1>
                    <HomePara>
                         <HomeSpan1> web developer,</HomeSpan1>
                        <HomeSpan2>photographer and pianist</HomeSpan2>
                    </HomePara>
                    <HomeBtnWrapper>
                        <HomeButton to='/contact'>
                            About me...
                        </HomeButton>
                    </HomeBtnWrapper>
                </HomeContent>
            </HomeBackground>
        </HomeContainer>
    )
}

export default HomeSection;
import React from 'react';
import {
    HomeBackground,
    HomeBtnWrapper,
    HomeContainer,
    HomeContent,
    HomeButton, HomeH1, HomeP, HomeText, HomeImg, HomeImgWrapper
} from "./HomeSectionElements";

import Img from '../../images/avatar.svg';



const HomeSection = () => {
     return (
        <HomeContainer>
            <HomeBackground>
                <HomeContent>

                    <HomeText>
                        <HomeP>
                            Hi, I am Eugenia
                        </HomeP>
                        <HomeH1> web developer </HomeH1>


                        <HomeP>photographer & pianist</HomeP>
                        <HomeBtnWrapper>
                            <HomeButton to='about'>
                                Learn more
                            </HomeButton>
                        </HomeBtnWrapper>
                    </HomeText>

                    <HomeImgWrapper>
                        <HomeImg src={Img} alt={''}></HomeImg>
                    </HomeImgWrapper>

                </HomeContent>
            </HomeBackground>
        </HomeContainer>
    )
}

export default HomeSection;
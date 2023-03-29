import React from 'react';
import {
    HomeBackground,
    HomeBtnWrapper,
    HomeContainer,
    HomeContent,
    HomeButton, HomeH1, HomeP, HomeText, HomeImg, HomeImgWrapper, HomeBackgroundStars
} from "./HomeSectionElements";
import Img from '../../images/avatar.svg';



const HomeSection = () => {


     return (
<>

        <HomeContainer>
            <HomeBackground>
                <HomeContent>

                    <HomeText>
                        <HomeP>
                            Hello world! I am Eugenia
                        </HomeP>
                        <HomeH1> Junior developer</HomeH1>

                        <HomeP>photographer & pianist</HomeP>
                        <HomeBtnWrapper>
                            <HomeButton
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
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
</>
    )
}

export default HomeSection;
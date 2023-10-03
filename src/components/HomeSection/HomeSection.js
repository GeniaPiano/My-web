import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import {
    HomeBackground,
    HomeBtnWrapper,
    HomeContainer,
    HomeContent,
    HomeButton, HomeH1, HomeP, HomeText, HomeImg, HomeImgWrapper,
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
                            <TypeAnimation
                                sequence={[
                                    'Hi, I am Eugenia',
                                ]}
                                wrapper="span"
                                cursor={false}
                            />
                        </HomeP>
                        <HomeH1>
                            <TypeAnimation
                                sequence={[
                                    1200,
                                    'Welcome on my Website',
                                ]}
                                wrapper="span"
                                cursor={false}
                            />

                        </HomeH1>

                        <HomeP>
                            <TypeAnimation
                                sequence={[
                                    2400,
                                    'I am developer, photographer and pianist',
                                ]}
                                wrapper="span"
                                cursor={false}
                            />
                        </HomeP>
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
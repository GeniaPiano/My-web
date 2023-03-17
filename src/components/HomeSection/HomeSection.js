import React, {useState} from 'react';
import {Button} from "../ButtonElement/ButtonElement";
import {
    ArrowForward, ArrowRight,
    HomeBackground,
    HomeBtnWrapper,
    HomeContainer,
    HomeContent,
    HomeH1,
    HomePara
} from "./HomeSectionElements";



const HomeSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HomeContainer>
            <HomeBackground>
                <HomeContent>
                    <HomeH1>
                       Welcome to Travel World.
                    </HomeH1>
                    <HomePara>
                        We can organise the best event for you.
                    </HomePara>
                    <HomeBtnWrapper>
                        <Button to='contact'
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                dark='true'
                                >
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HomeBtnWrapper>
                </HomeContent>
            </HomeBackground>
        </HomeContainer>
    )
}

export default HomeSection;
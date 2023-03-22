import React from 'react';

import {
    InfoContainer, InfoWrapper, InfoRow,
    Column1, Column2, TopLine, TextWrapper,
    Heading, Subtitle, BtnWrapper, ImgWrapper, Button
} from "./InfoSectionElements";







const InfoSection = ({lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         darkText,
                         buttonLabel,
                         description,
                        primary, dark, dark2

                     }) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                      <Column1>
                          <TextWrapper>
                              <TopLine> {topLine}</TopLine>
                              <Heading lightText={lightText}>  {headline} </Heading>
                              <Subtitle darkText={darkText}> {description} </Subtitle>
                              <BtnWrapper>
                                  <Button to="/"
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact="true"
                                  offset={-80}
                                  primary={primary ? 1 : 0 }
                                  dark={dark ? 1 : 0}
                                  dark2={dark2 ? 1 : 0}
                                  > {buttonLabel}</Button>
                              </BtnWrapper>
                          </TextWrapper>
                        </Column1>
                        <Column2>
                          <ImgWrapper>
                              {/*<Img src={img}/>*/}

                          </ImgWrapper>
                        </Column2>
                  </InfoRow>
             </InfoWrapper>
         </InfoContainer>
        </>
    )
}


export default InfoSection;
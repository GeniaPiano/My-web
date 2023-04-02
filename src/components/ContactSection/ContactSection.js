import React, {useEffect} from  'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import {
    ContactBackground,
    ContactContainer,
    ContactH1,
    ContactLi,
    ContactList, ContactLinkedInIcon,
    ContactTextItem,
    ContactWrapper, ContactMailIcon
} from "./ContactElements";

const ContactSection = ({ contactRef }) => {

    useEffect(()=> {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        })
    })

  return (
    <ContactContainer id="contact" ref={contactRef}>
        <ContactBackground>
            <ContactWrapper data-aos='fade-up'>
                <ContactH1>You can<span> contact </span>me via</ContactH1>
                <ContactList>
                    <ContactLi href="https://www.linkedin.com/in/eugenia-kwon-kominek-5892a3242/" target="_blank">
                        <ContactLinkedInIcon />
                        <ContactTextItem>
                            Linkedin
                        </ContactTextItem>
                    </ContactLi>
                    <ContactLi  href="mailto:genia.piano@hotmail.com" target="_blank">
                        <ContactMailIcon/>
                        <ContactTextItem>
                            E-mail
                        </ContactTextItem>
                    </ContactLi >
                    <ContactLi>
                        <ContactTextItem>
                            <small>genia.piano@hotmail.com</small>
                        </ContactTextItem>
                    </ContactLi>
                </ContactList>
            </ContactWrapper>
        </ContactBackground>
    </ContactContainer>
  );
};

export default ContactSection;

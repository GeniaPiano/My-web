import React from "react";
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
  return (
    <ContactContainer id="contact" ref={contactRef}>
        <ContactBackground>
            <ContactWrapper>
                <ContactH1>You can
                    <span> contact </span>
                    me via</ContactH1>
                <ContactList>
                    <ContactLi>
                        <ContactLinkedInIcon />
                        <ContactTextItem>
                            Linkedin
                        </ContactTextItem>
                    </ContactLi>
                    <ContactLi>
                        <ContactMailIcon />
                        <ContactTextItem>
                            E-mail
                        </ContactTextItem>

                    </ContactLi >
                    <a href="mailto:genia.piano@hotmail.com" target="_blank">
                        <ContactLi>

                        <ContactTextItem>
                           genia.piano@hotmail.com
                        </ContactTextItem>
                    </ContactLi>
                    </a>
                </ContactList>
            </ContactWrapper>
        </ContactBackground>
    </ContactContainer>
  );
};

export default ContactSection;

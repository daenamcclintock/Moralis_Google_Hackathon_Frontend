import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from "react-icons/fa";
import { CompanyContainer, FooterContainer, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, SocialIcons } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
        <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Footer</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/daenamcclintock/Moralis_Google_Hackathon_Frontend">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="discordapp.com/users/dcm13#3056">
            <FaDiscord size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterContainer>
  )
}

export default Footer
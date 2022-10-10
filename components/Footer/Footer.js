import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from "react-icons/fa";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { CompanyContainer, FooterContainer, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, SocialIcons } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
        <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This website was designed and developed by Daena McClintock, Fabian Acosta, and Yazeed Hani</Slogan>
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
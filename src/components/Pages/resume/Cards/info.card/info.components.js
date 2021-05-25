import styled from 'styled-components'
import Location from '../../../../../images/icons/resume/location.svg'
import Phone from '../../../../../images/icons/resume/call.svg'
import Mail from '../../../../../images/icons/resume/email.svg'
import Github from '../../../../../images/icons/hero/github.svg'

export const InfoCard = styled.div``

export const InfoSection = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
`
export const Avatar = styled.div`
  display: flex;
  max-width: 35%;
  margin-right: 1.1rem;
  > * {
    border-radius: 0.8rem;
  }
`

export const Information = styled.div``

export const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`

export const Prof = styled.h4`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  padding-left: 0.2rem;
  margin-bottom: 1.4rem;
`

export const ContactInfo = styled.ul``

export const ContactInfoItem = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  svg {
    fill: ${(props) => props.theme.colors.main};
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.8rem;
  }
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const LocationIcon = styled(Location)``
export const PhoneIcon = styled(Phone)``
export const MailIcon = styled(Mail)``
export const GithubIcon = styled(Github)``

export const LocationText = styled.p``
export const PhoneText = styled.p``
export const MailText = styled.a``

export const GithubLink = styled.a`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

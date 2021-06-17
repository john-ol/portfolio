import styled from 'styled-components'
import Info from '../../../../../images/icons/resume/info.svg'

export const InfoSection = styled.section`
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

export const Information = styled.section``
export const CardIcon = styled(Info)``

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

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const ItemIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.8rem;
`
export const ItemText = styled.p``

export const ItemLink = styled.a`
  position: relative;
  display: inline-block;
  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.2rem;
    width: 100%;
    height: 0.1rem;
    display: block;
    background-color: ${(props) => props.theme.colors.main};
    opacity: 0;
    transition: opacity 0.2s linear;
  }
  :hover:after {
    opacity: 1;
  }
`

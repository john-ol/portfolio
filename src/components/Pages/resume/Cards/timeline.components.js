import styled from 'styled-components'

export const TimeLineSection = styled.section``

export const TimeLineItem = styled.div`
  position: relative;
  padding: 2.7rem 0rem 0rem 1.5rem;
  border-left: 2px solid ${(props) => props.theme.colors.borders};

  :before {
    content: '${(props) => props.date}';
    display: block;
    position: absolute;
    top: 0.8rem;
    left: 1.5rem;
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fonts.weight.regular};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0.8rem;
    left: -0.7rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 1rem;
    border: 0.2rem solid ${(props) => props.theme.colors.borders};
    background: white;
  }
`

export const TimeLineTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.1rem;
`

export const TimeLineSubtitle = styled.h4`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  margin-bottom: 0.8rem;
`

export const TimeLineText = styled.p`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  padding-bottom: 1.2rem;
`

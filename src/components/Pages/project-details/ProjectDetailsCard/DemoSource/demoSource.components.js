import styled from 'styled-components'

export const DemoSourceItem = styled.div`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 1.8rem;
  }
`

export const DemoSourceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`

export const DemoSourceContent = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  svg {
    fill: ${(props) => props.theme.colors.projects.webapp};
    width: 1.8em;
    height: 1.8em;
    margin-right: 1.2rem;
  }
`

export const DemoSourceLink = styled.a`
  position: relative;
  display: inline-block;
  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.3rem;
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

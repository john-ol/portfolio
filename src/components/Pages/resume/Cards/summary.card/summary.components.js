import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import Summary from '../../../../../images/icons/resume/summary.svg'

export const CardIcon = styled(Summary)``

export const SummaryText = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.7;
  text-indent: 1.5rem;

  ${up('sm')} {
    font-size: 1.3rem;
    text-indent: 1.8rem;
  }

  ${up('md')} {
    font-size: 1.45rem;
    text-indent: 2rem;
  }

  ${up('lg')} {
    font-size: 1.5rem;
    text-indent: 2.5rem;
    line-height: 1.8;
  }

  ${up('xl')} {
    font-size: 1.6rem;
    text-indent: 3rem;
    line-height: 1.9;
  }
`

import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'
import { Container } from '../../Layout/layout.components'
import { Row } from '../../Grid/grid.components'
import { Button } from '../../Buttons/Button/button.components'

export const ContactContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
`

export const ContactRow = styled(Row)`
  align-items: center;
  justify-content: center;
`

export const ContactForm = styled(motion.form)`
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.other.cardradius};
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.15);

  > * {
    :not(:last-child) {
      margin-bottom: 2rem;

      ${up('md')} {
        margin-bottom: 2.4rem;
      }

      ${up('md', 'landscape')} {
        margin-bottom: 1.8rem;
      }

      ${up('xxl')} {
        margin-bottom: 2.8rem;
      }
    }
  }

  ${up('sm')} {
    width: 40rem;
  }

  ${up('md', 'landscape')} {
    margin: 1.5rem 0;
  }

  ${up('lg')} {
    width: 50rem;
  }
`
export const FormHeader = styled.div`
  width: 100%;
`
export const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;

  ${up('md')} {
    font-size: 2.4rem;
  }

  ${up('md', 'landscape')} {
    font-size: 2rem;
  }
`

export const FormRequired = styled.p`
  text-align: left;
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.light};

  ${up('md')} {
    font-size: 1.4rem;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;

  ${up('md')} {
    font-size: 1.6rem;
  }

  input,
  textarea {
    font-size: 1.3rem;

    ${up('md')} {
      font-size: 1.4rem;
    }
  }
`

export const Input = styled.input`
  margin-top: 1rem;
  border: 0.1rem solid ${(props) => props.theme.colors.borders};
  border-radius: ${(props) => props.theme.other.cardradius};
  height: 5rem;
  padding: 0 0.8rem;
  outline: none;

  :focus {
    border: none;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.15);
  }

  ::placeholder {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const TextArea = styled.textarea`
  margin-top: 0.8rem;
  border: 0.1rem solid ${(props) => props.theme.colors.borders};
  border-radius: ${(props) => props.theme.other.cardradius};
  min-height: 10rem;
  outline: none;
  resize: none;
  padding: 0.8rem;

  ${up('md', 'landscape')} {
    min-height: 8rem;
  }

  ${up('xxl')} {
    min-height: 12rem;
  }

  ::placeholder {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  :focus {
    border: none;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.15);
  }
`
export const Recaptcha = styled(ReCAPTCHA)`
  transform: scale(0.79);

  ${up('sm')} {
    margin-top: 1rem;
    transform: scale(1.15);
  }

  ${up('md', 'landscape')} {
    margin-top: 0;
    transform: scale(1);
  }
`

export const SendButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${(props) => props.theme.colors.borders};
      color: ${(props) => props.theme.colors.secondary};
      :hover {
        background-color: ${(props) => props.theme.colors.borders};
        color: ${(props) => props.theme.colors.secondary};
        border-color: transparent;
      }
    `}

  ${up('md', 'landscape')} {
    margin-top: 0.5rem;
  }
`

import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
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

export const ContactForm = styled.form`
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
    }
  }

  ${up('sm')} {
    width: 40rem;
  }
`

export const FormTitle = styled.h1``

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;

  input,
  textarea {
    font-size: 1.3rem;
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

  ::placeholder {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  :focus {
    border: none;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.15);
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
`

import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from './../components/Layout/Layout'
import {
  ContactContainer,
  ContactRow,
  ContactForm,
  FormTitle,
  Label,
  Input,
  TextArea,
  SendButton,
} from '../components/Pages/contact/contact.components'

export default function Contact() {
  const Alert = withReactContent(Swal)
  //const recaptchaRef = useRef()
  const [token, setToken] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const submitHandler = (event) => {
    event.preventDefault()

    Alert.fire({
      toast: true,
      icon: 'error',
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      title: 'Please, fill all fields',
    })

    // if (!formData.name || !formData.email || !formData.message) {
    //   return
    // }
    setFormData({ name: '', email: '', message: '' })
    setToken(null)
    //recaptchaRef.current.reset()
    console.log(token, formData)
  }

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }))
  }

  const reCaptchaChangeHandler = (value) => {
    setToken(value)
  }

  return (
    <Layout>
      <ContactContainer>
        <ContactRow>
          <ContactForm>
            <FormTitle>Write to me</FormTitle>
            <Label>
              Name
              <Input
                type='text'
                name='name'
                required='required'
                placeholder='input your name'
                value={formData.name}
                onChange={changeHandler}
              />
            </Label>
            <Label>
              E-mail
              <Input
                type='text'
                name='email'
                required='required'
                placeholder='input your e-mail'
                value={formData.email}
                onChange={changeHandler}
              />
            </Label>
            <Label>
              Message
              <TextArea
                name='message'
                required='required'
                placeholder='input your message'
                value={formData.message}
                onChange={changeHandler}
              />
            </Label>
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey='6LffpVMbAAAAAJml8aLc5T6mIjdwOEz3RRm1H9Ic'
              onChange={reCaptchaChangeHandler}
              onExpired={() => {
                recaptchaRef.current.reset()
              }}
            /> */}
            <SendButton
              type='submit'
              variant='primary'
              // disabled={!token}
              onClick={submitHandler}
            >
              Send message
            </SendButton>
          </ContactForm>
        </ContactRow>
      </ContactContainer>
    </Layout>
  )
}

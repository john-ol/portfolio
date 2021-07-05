import React, { useState, useRef } from 'react'
import axios from 'axios'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from './../components/Layout/Layout'
import { Seo } from '../components/Seo/Seo'
import {
  ContactContainer,
  ContactRow,
  ContactForm,
  FormHeader,
  FormTitle,
  FormRequired,
  Label,
  Input,
  TextArea,
  Recaptcha,
  SendButton,
} from '../components/Pages/contact/contact.components'

export default function Contact() {
  const url = process.env.GATSBY_API_URL
  const Alert = withReactContent(Swal)
  const recaptchaRef = useRef()
  const [token, setToken] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const submitHandler = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      return Alert.fire({
        toast: true,
        icon: 'error',
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        title: 'Please, fill all fields',
      })
    }
    const data = {
      ...formData,
      token,
    }

    axios
      .post(url, data)
      .then((res) =>
        Alert.fire({
          toast: true,
          icon: 'success',
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          title: res.data.message,
        })
      )
      .catch((err) =>
        Alert.fire({
          toast: true,
          icon: 'error',
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          title: err.response?.data
            ? err.response?.data.errors
              ? err.response?.data.errors
                  .map((el, i) => `${i + 1}. ${el.msg}.`)
                  .join('\n')
              : err.response?.data.message
            : 'Something went wrong :(',
        })
      )

    setFormData({ name: '', email: '', message: '' })
    setToken(null)
    //recaptchaRef.current.reset()
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
      <Seo pageTitle='Contact me' />
      <ContactContainer>
        <ContactRow>
          <ContactForm>
            <FormHeader>
              <FormTitle>Contact me</FormTitle>
              <FormRequired>Required information*</FormRequired>
            </FormHeader>
            <Label>
              Name*
              <Input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={changeHandler}
              />
            </Label>
            <Label>
              E-mail*
              <Input
                type='text'
                name='email'
                placeholder='E-mail'
                value={formData.email}
                onChange={changeHandler}
              />
            </Label>
            <Label>
              Message*
              <TextArea
                name='message'
                placeholder='Your message'
                value={formData.message}
                onChange={changeHandler}
              />
            </Label>
            <Recaptcha
              ref={recaptchaRef}
              sitekey='6LffpVMbAAAAAJml8aLc5T6mIjdwOEz3RRm1H9Ic'
              onChange={reCaptchaChangeHandler}
              onExpired={() => {
                recaptchaRef.current.reset()
              }}
            />
            <SendButton
              type='submit'
              variant='primary'
              disabled={!token}
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

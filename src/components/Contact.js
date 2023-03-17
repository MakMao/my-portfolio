import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Contact = () => {

  let navigate = useNavigate()

  const handleSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/moqzwbdp",
      data: values
    })
      .then(response => {
        navigate('/thank-you')
      })
      .catch(error => {
        actions.setSubmitting(false);
      });
  };

  const validate = Yup.object({
    name: Yup.string()
      .min(2, 'Your name must contain at least 2 letters')
      .max(30, 'Your name must be 30 characters or less')
      .required('Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .max(30, 'Your email must be 30 characters or less')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Your message must contain at least 10 letters')
      .required('Message is required'),
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validate}
      onSubmit={handleSubmit} 
    >
      {formik => (
        <Container>
          <Form>
            <div className="form-intro">
              <h2 className="intro-header">Contact me</h2>
              <p className="intro-text">Do you want to know more? Feel free to get in touch with me and I will respond promptly!</p>
            </div>
            <div className="form-container">
              <div className="form-header">
                <div className="test">
                  <TextField className="test" label="Name" name="name" type="text"/>
                </div>
                <div className="input-email">
                <TextField label="Email" name="email" type="email"/>
                  </div>
              </div>
              <div >
                <TextField label="Message" name="message" type="text" />
              </div>
              <button className="btn" type="submit" >
                Submit
              </button>
            </div>
          </Form>
        </Container>
      )}
    </Formik>
  )
  }

const Container = styled.div`
margin: 0 auto;
margin-bottom: 4em; 

.form-intro {
  background: var(--clr-cyan-dark);
  padding-bottom: 5em;
}

.intro-header {
  color: var(--clr-cyan-v-light);
  padding-top: 1em;
}

.check {
  height: 100px !important;
}

.form-control {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: left;
  align-items: flex-start;
}

input,
textarea {
  width: 100%;
}

.form-container {
  border: 2px solid var(--clr-cyan-regular);
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2em 1em;
  background: var(--clr-cyan-light);
  margin-top: -2em;
  border-radius: 5px;
}

.btn {
  margin-top: 2em;
}
textarea {
  height: 100px;
}

@media (min-width: 768px ) {
  .input-control {
    width: 95%;
    margin: 0 auto;
    column-gap: 1em;
  }
  .form-header{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5em;
    width: 100%;
  }
}

`

export default Contact
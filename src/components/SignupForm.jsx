import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const firebaseConfig = {
  apiKey: 'AIzaSyBoKht-v5lm879II-6Dd9weQMzaGEHJBc8',
  authDomain: 'timber-login-c10.firebaseapp.com',
  projectId: 'timber-login-c10',
  storageBucket: 'timber-login-c10.appspot.com',
  messagingSenderId: '809080733648',
  appId: '1:809080733648:web:e3ec45da71f75966b2c3d5',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function SignupForm() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmal] = useState()
  const [password, setPassword] = useState()

  const handleForm = e => {
    const newValue = e.target.value.trim()
    console.log(e.target, newValue)
  }

  return (
    <>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Your First Name' onChange={handleForm} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Your Last Name' onChange={handleForm} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' onChange={handleForm} />
          <Form.Text>We'll never share your email.</Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' onChange={handleForm} />
        </Form.Group>

        <Form.Group>
          <Button variant='success' size='lg' type='submit'>
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

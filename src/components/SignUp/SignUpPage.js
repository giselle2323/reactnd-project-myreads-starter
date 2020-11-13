import React from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import SignUpForm from './SignUpForm'


const SignUpPage = () => (
  <section>
    <h1>Signup</h1>
    <FirebaseContext>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext>
  </section>
)


export default SignUpPage
import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const SignUpForm = props => {
  const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
  }
  const [formState, setFormState] = useState(INITIAL_STATE)
  const onSubmit = e => {
    const { username, email, password } = formState;
    props.firebase
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
      setFormState({...INITIAL_STATE });
    })
    .catch(error => {
      setFormState({ error })
    });
    e.preventDefault();
  }

  const onChange = e => {
    setFormState({ [e.target.name]: e.target.value});
  };

  const isInvalid =
    password !== confirmPassword ||
    password === '' ||
    email === '' ||
    username === '';

  const { username, email, password, confirmPassword, error} = formState;
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
      <h3>
        Dont have an account? <Link to={ROUTES.SIGN_UP}></Link>
      </h3>
    </>
  )
}


export default SignUpForm
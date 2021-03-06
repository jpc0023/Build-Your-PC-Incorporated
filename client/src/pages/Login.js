import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      {/* <Link to="/signup">← Go to Signup</Link> */}

      <form className='form-container' onSubmit={handleFormSubmit}>
        <div className="login- ">
          {/* <label htmlFor="email">Email address:</label> */}
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="my-2 ">
          {/* <label htmlFor="pwd">Password:</label> */}
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="submit-container my-2">
          <button type="submit">Login</button>
        </div>
        <div className="flex-row my-2">
            <p>Don't have an account?</p>
             <Link className="mx-1" to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

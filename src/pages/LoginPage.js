import React, { useState, useEffect } from 'react';

const LoginPage = ({ login, loading, isSignedIn, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isSignedIn) {
      history.push('/');
    }
  }, [isSignedIn, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className='row'>
      <div className='col s12 m6 offset-m3'>
        <div className='card'>
          <div className='card-content'>
            <h4 style={{ textAlign: 'center' }}>Login</h4>
            <form onSubmit={submitHandler}>
              <div className='row'>
                <div className='col s12 input-field'>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    type='email'
                    className='validate'
                  />
                  <label htmlFor='email'>Email Address</label>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 input-field'>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    type='password'
                    className='validate'
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <button disabled={loading} type='submit' className='btn black'>
                <i className='material-icons left'>login</i> Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

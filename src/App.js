import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
      setIsSignedIn(true);
    } else {
      setUser(null);
      setIsSignedIn(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        'https://dev-api.ownerandtenant.com/v1.0/auth/user/signin',
        { email, password },
        config
      );
      if (data.status === 200) {
        localStorage.setItem('user', JSON.stringify(data.result));
        setLoading(false);
        setUser(data.result);
        setIsSignedIn(true);
      } else {
        alert('Invalid Credentials');
        setIsSignedIn(false);
        setLoading(false);
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (err) {
      alert('Invalid Credentials');
      console.log(err.message);
      setIsSignedIn(false);
      setLoading(false);
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  const logout = () => {
    setUser(null);
    setIsSignedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Header user={user} logout={logout} isSignedIn={isSignedIn}></Header>
      <main className='container'>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <HomePage user={user} {...props}></HomePage>}
          ></Route>
          <Route
            exact
            path='/signin'
            render={(props) => (
              <LoginPage
                login={login}
                loading={loading}
                isSignedIn={isSignedIn}
                {...props}
              ></LoginPage>
            )}
          ></Route>
        </Switch>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;

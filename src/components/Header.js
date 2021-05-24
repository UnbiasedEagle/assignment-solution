import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isSignedIn, logout, user }) => {
  return (
    <nav className='purple lighten-2'>
      <div className='nav-wrapper container'>
        <Link to='/' className='brand-logo left'>
          Solution
        </Link>

        <ul id='nav-mobile' className='right'>
          {isSignedIn ? (
            <React.Fragment>
              <li style={{ marginRight: '1.6rem' }}>
                <i style={{ marginRight: '0' }} className='material-icons left'>
                  person
                </i>
                <span>
                  {user.user.firstName} {user.user.lastName}
                </span>
              </li>
              <li>
                <span style={{ cursor: 'pointer' }} onClick={logout}>
                  Logout
                </span>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

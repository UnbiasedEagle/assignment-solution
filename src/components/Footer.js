import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1.2rem' }} className='grey lighten-4'>
      <div
        className='conatainer'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>Assignment Solution &copy; 2021 Saurabh Singh</span>
      </div>
    </footer>
  );
};

export default Footer;

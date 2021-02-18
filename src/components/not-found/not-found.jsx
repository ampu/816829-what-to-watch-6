import React from 'react';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';


const NotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Page Not Found</h1>

        <UserBlock/>
      </header>

      <footer className="page-footer">
        <Logo isLight={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

NotFound.propTypes = {};


export default NotFound;

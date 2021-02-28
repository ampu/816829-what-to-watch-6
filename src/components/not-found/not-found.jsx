import React from 'react';
import {Link} from 'react-router-dom';

import {MainPath} from '../../constants/paths';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

import './not-found.css';

const NotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Page Not Found</h1>

        <UserBlock/>
      </header>

      <div className="not-found">
        <Link className="not-found__main-link" to={MainPath.INDEX}>Go to main page</Link>
      </div>

      <footer className="page-footer">
        <Logo isLight/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;

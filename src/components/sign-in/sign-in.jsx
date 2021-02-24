import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '../../utils/dom-util';

import Logo from '../logo/logo';


const Field = {
  EMAIL: `email`,
  PASSWORD: `password`,
};


const SignIn = ({error} = {}) => {

  const [login, setLogin] = React.useState(``);
  const [password, setPassword] = React.useState(``);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          {error && error.message && (
            <div className="sign-in__message">
              <p>{error.message}</p>
            </div>
          )}
          <div className="sign-in__fields">
            <div className={getClassName({[`sign-in__field`]: true, [`sign-in__field--error`]: error && error.field === Field.EMAIL})}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" autoComplete="username" required value={login} onChange={(evt) => setLogin(evt.target.value)}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={getClassName({[`sign-in__field`]: true, [`sign-in__field--error`]: error && error.field === Field.PASSWORD})}>
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="current-password" required value={password} onChange={(evt) => setPassword(evt.target.value)}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isLight={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    field: PropTypes.oneOf(Object.values(Field)),
  }),
};


export default SignIn;

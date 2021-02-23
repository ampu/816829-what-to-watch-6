import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '../../utils/dom-util';

import Logo from '../logo/logo';

const Field = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

const getFieldClassName = (field, error) => {
  return getClassName({
    [`sign-in__field`]: true,
    [`sign-in__field--error`]: error && error.field === field,
  });
};

const SignIn = ({error} = {}) => {

  const [login, setLogin] = useState(``);
  const handleLoginChange = useCallback((evt) => {
    setLogin(evt.target.value);
  }, [setLogin]);

  const [password, setPassword] = useState(``);
  const handlePasswordChange = useCallback((evt) => {
    setPassword(evt.target.value);
  }, [setPassword]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
  }, []);

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
            <div className={getFieldClassName(Field.EMAIL, error)}>
              <input className="sign-in__input" id="user-email"
                type="email" placeholder="Email address" name="user-email" autoComplete="username" required
                value={login} onChange={handleLoginChange}/>

              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={getFieldClassName(Field.PASSWORD, error)}>
              <input className="sign-in__input" id="user-password"
                type="password" placeholder="Password" name="user-password" autoComplete="current-password" required
                value={password} onChange={handlePasswordChange}/>

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

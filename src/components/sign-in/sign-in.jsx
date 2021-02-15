import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';


const Field = {
  EMAIL: `email`,
  PASSWORD: `password`,
};


const SignIn = ({error} = {}) => {

  const getFieldClassName = (field) => error && error.field === field
    ? `sign-in__field sign-in__field--error`
    : `sign-in__field`;

  const errorMessageElement = error && error.message &&
    <div className="sign-in__message">
      <p>{error.message}</p>
    </div>;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {errorMessageElement}
          <div className="sign-in__fields">
            <div className={getFieldClassName(Field.EMAIL)}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" autoComplete="username"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={getFieldClassName(Field.PASSWORD)}>
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="current-password"/>
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

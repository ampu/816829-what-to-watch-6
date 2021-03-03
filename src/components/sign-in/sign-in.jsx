import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import getClassName from 'classnames';

import Logo from '../logo/logo';
import {OperationStatus, OPERATION_STATUSES} from '../../constants/operation-status';
import {MainPath} from '../../constants/paths';
import {postLogin} from '../../store/operations/user-operations';

import './sign-in.css';

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

const SignIn = ({onSubmit, loginStatus} = {}) => {

  const [error, setError] = useState(null);

  const [email, setEmail] = useState(``);
  const handleLoginChange = useCallback((evt) => {
    setEmail(evt.target.value);
  }, [setEmail]);

  const [password, setPassword] = useState(``);
  const handlePasswordChange = useCallback((evt) => {
    setPassword(evt.target.value);
  }, [setPassword]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();

    setError(null);

    onSubmit({email, password})
      .catch(({response = {}}) => {
        const {data = {}} = response;
        setError({message: data.error});
      });
  }, [onSubmit, email, password, setError]);

  const isDisabled = loginStatus === OperationStatus.PENDING;

  const formClassMap = {
    [`sign-in__form`]: true,
    [`sign-in__form--disabled`]: isDisabled,
  };

  if (loginStatus === OperationStatus.RESOLVED) {
    return <Redirect to={MainPath.INDEX}/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className={getClassName(formClassMap)} onSubmit={handleFormSubmit}>
          {error && error.message && (
            <div className="sign-in__message">
              <p>{error.message}</p>
            </div>
          )}
          <div className="sign-in__fields">
            <div className={getFieldClassName(Field.EMAIL, error)}>
              <input className="sign-in__input" id="user-email"
                type="email" placeholder="Email address" name="user-email" autoComplete="username" required
                value={email} onChange={handleLoginChange} disabled={isDisabled}/>

              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={getFieldClassName(Field.PASSWORD, error)}>
              <input className="sign-in__input" id="user-password"
                type="password" placeholder="Password" name="user-password" autoComplete="current-password" required
                value={password} onChange={handlePasswordChange} disabled={isDisabled}/>

              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={isDisabled}>Sign in</button>
          </div>
        </form>
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

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loginStatus: PropTypes.oneOf(OPERATION_STATUSES),
  error: PropTypes.shape({
    message: PropTypes.string,
    field: PropTypes.oneOf(Object.values(Field)),
  }),
};

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit({email, password}) {
    return dispatch(postLogin({email, password}));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

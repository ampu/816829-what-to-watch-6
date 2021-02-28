import React from 'react';

import './container.css';

export const withContainer = (WrappedComponent) => {
  const Container = (props) => {
    return (
      <div className="container">
        <WrappedComponent {...props}/>
      </div>
    );
  };

  Container.displayName = Container.name;

  return Container;
};

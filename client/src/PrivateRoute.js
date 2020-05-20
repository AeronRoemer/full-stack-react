import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      { context => (
        <Route
          {...rest} //passes props (like 'path')
          render={props => context.authenticatedUser ? ( //if authenticatedUser is found in context, render props
              <Component {...props} /> 
            ) : (
              <Redirect to={{
                  pathname: '/signin',// else, redirect to signin
                  state: { from: props.location }, //save the page they tried to access
                }} /> 
            )

}
        />
      )}
    </Consumer>
  );
};
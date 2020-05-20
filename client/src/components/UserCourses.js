import React from 'react';

export default ({ context }) => { //extract context from props
  const authUser = context.authenticatedUser;
  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>This will display all courses by {authUser.firstName + " " + authUser.lastName}. </h1>
    </div>
  </div>
  );
}
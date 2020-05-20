import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

//components
import AllCourses from './AllCourses.js';
import UserCourses from './UserCourses.js';
//context components
import withContext from '../Context';
const UserCoursesWithContext = withContext(UserCourses)
const AllCoursesWithContext = withContext(AllCourses)

export default ({ context }) => {
  const authUser = context.authenticatedUser;
  return (
  <div className="bounds">
    <div>
        <Link className="signup" to="/home/all">All Courses</Link>
        <Link className="signup" to="/home/usercourses">User Courses</Link>
    </div>
    <h1>Home</h1>
    <p>This homepage will eventually get state when courses are added .</p>
    <p>All courses // my courses // search courses .</p>
    <Route path={`/home/all`} component={AllCoursesWithContext}/>
    <Route path={`/home/usercourses`} component={UserCoursesWithContext}/>
  </div>
  )
};

import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
//import { FaIconName } from 'react-icons/fa'

//components
import AllCourses from './courseDisplay/AllCourses.js';
import SingleCourse from './courseDisplay/SingleCourse.js';
import UserCourses from './courseDisplay/UserCourses.js';
import SearchForm from './SearchBar.js'

//context components
import withContext from '../Context';
const UserCoursesWithContext = withContext(UserCourses)
const AllCoursesWithContext = withContext(AllCourses)
const SearchBarWithContext = withContext(SearchForm)
const SingleCourseWithContext = withContext(SingleCourse)

export default () => {
  return (
  <div className="bounds">
    <div>
        <Link className="signup" to="/">Home</Link>
        <Link className="signup" to="/courses/all">All Courses</Link>
        <Link className="signup" to="/courses/usercourses">User Courses</Link>
        <SearchBarWithContext />
        {/* We don't need to define a route to '/home' here because it's already defined in App.js*/}
        <Route path={`/courses/all`} component={AllCoursesWithContext}/>
        <Route path={`/courses/usercourses`} component={UserCoursesWithContext}/>
        <Route path={`/courses/:id`} component={SingleCourseWithContext}/>

    </div>
  </div>
  )
};

{/*  
  To render with PRops: PASS COMPONENT RENDER THRU FUNCTION 
  render={()=>(
    <Component props={object} />
  )}
  TO PASS STATE:::::::::::::::::::::::::
  <Link to={{
 pathname: '/courses',
 search: '?sort=name',
 hash: '#the-hash',
 state: { fromDashboard: true }
}}>
 Courses
</Link>
*/}
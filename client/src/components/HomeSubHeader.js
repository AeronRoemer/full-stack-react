import React from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router, 
  Switch
} from 'react-router-dom';

//components
import AllCourses from './AllCourses.js';
import UserCourses from './UserCourses.js';
import SearchBar from './SearchBar.js'

//context components
import withContext from '../Context';
const UserCoursesWithContext = withContext(UserCourses)
const AllCoursesWithContext = withContext(AllCourses)
const SearchBarWithContext = withContext(SearchBar)

export default () => {
  return (
  <div className="bounds">
    <div>
        <Link className="signup" to="/">Home</Link>
        <Link className="signup" to="/home/all">All Courses</Link>
        <Link className="signup" to="/home/usercourses">User Courses</Link>
        <SearchBarWithContext />
        {/* We don't need to define a route to '/home' here because it's already defined in App.js*/}
          <Route path={`/home/all`} component={AllCoursesWithContext}/>
          <Route path={`/home/usercourses`} component={AllCoursesWithContext}/>
          <Route path={`/home/course/:id`} component={AllCoursesWithContext}/>

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
import React from 'react';
import {
  Link
} from 'react-router-dom';
export default ({ context }) => {
    /* Randomized array created with Durstenfeld shuffle algorithm */
   const shuffle = (array) => {
     for (var i = array.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var temp = array[i];
         array[i] = array[j];
         array[j] = temp;
     }
     return array;
   }
   //could eb moved to context since UserCourses and AllCourses will use this
   function trimCourses (str) {
       if (str.length <= 200) return str;
       return str.substr(0, str.lastIndexOf(" ", 200));
     //function for trimming found at https://stackoverflow.com/questions/5454235/shorten-string-without-cutting-words-in-javascript
   }
   const allCourses = context.courses
   const randomFour = shuffle(allCourses).slice(0,4)
   return (
   <div className="course">
     {randomFour.map((course) =>(
                  <li key={course.id} className='course-list-item'>
                      <div className='contact-avatar'></div>
                      <div className='contact-details'>
                          <h1>{course.title}</h1>
                          <p>{trimCourses(course.description)} ...</p>
                          <Link className="signup" to={`home/course/${course.id}`}>Read More</Link>
                      </div>
                  </li>
              ))}
   </div>
   )
 };
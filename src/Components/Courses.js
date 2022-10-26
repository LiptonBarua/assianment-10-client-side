import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewCourses from './NewCourses';


export const Courses = () => {
    const courses = useLoaderData();
    
    return (
     
       <div className='mt-10'>
         <h1 className='text-danger'>All Card: {courses.length}</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 md:mx-0 my-10'>
          {
            courses.map(course=><NewCourses key={course.id}  course={course}></NewCourses>)
          }
        </div>
       </div>
    );
};

export default Courses;
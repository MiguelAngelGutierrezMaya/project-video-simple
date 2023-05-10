'use client';

import './index.css';

import courses from './courses.json';
import CourseCard from '@/components/Home/CourseCard';

export default function Home() {
  return (
    <div className="home-container">
      <input className='search' type="search" placeholder="Buscar cursos" />
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

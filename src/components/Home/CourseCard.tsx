/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ICard } from './interface';

import './index.css';
import { useRouter } from 'next/navigation';

const CourseCard = ({ course }: { course: ICard }) => {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Redirect to home nextjs
    router.push(`/course?id=${course.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;

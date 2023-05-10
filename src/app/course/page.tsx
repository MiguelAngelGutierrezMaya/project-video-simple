'use client';

import { useSearchParams } from 'next/navigation';
import './index.css';
import courses from './courses.json';
import { IVideo } from '@/components/Course/interface';
import CourseDetail from '@/components/Course/CourseDetail';

export default function Course() {
  const searchParams = useSearchParams();

  const search = searchParams?.get('id');
  const object: IVideo =
    (courses.find(
      (course: IVideo) => course.id.toString() === search,
    ) as IVideo) || courses[0];

  return <CourseDetail video={object}></CourseDetail>;
}

import { useGetMyEnrolledAllCoursesQuery } from "../../features/student/studentCourseManagementApi";

const Course = () => {
    const {data: myEnrolledCourse} = useGetMyEnrolledAllCoursesQuery(undefined)
    console.log(myEnrolledCourse)
  return (
    <div>
      
    </div>
  );
};

export default Course;
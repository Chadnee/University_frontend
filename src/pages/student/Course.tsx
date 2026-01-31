import { useGetMyEnrolledCourseQuery } from "../../features/student/studentCourseManagementApi";

const Course = () => {
    const {data: myEnrolledCourse} = useGetMyEnrolledCourseQuery(undefined)
    console.log(myEnrolledCourse)
  return (
    <div>
      
    </div>
  );
};

export default Course;
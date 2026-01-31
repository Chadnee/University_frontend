import { useGetMyOfferedCourseQuery } from "../../features/student/studentCourseManagementApi";

const OfferedCourse = () => {
  const {data: myOfferedCourse} = useGetMyOfferedCourseQuery(undefined)
  console.log(myOfferedCourse)
  return (
    <div>
      <h1>This is OfferedCourse component</h1>
    </div>
  );
};

export default OfferedCourse;
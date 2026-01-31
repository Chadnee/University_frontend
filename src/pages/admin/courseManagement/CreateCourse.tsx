import { Button, Col, Flex } from "antd";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import SelectForm from "../../form/SelectForm";
import { useCreateCourseMutation, useGetAllCourseQuery } from "../../../features/admin/courseManagementApi";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import type { TResponse } from "../../constants/global";
import { toast } from "sonner";
import { ResetButton, SubmitButton } from "../../../components/Footer";

const CreateCourse = () => {
    const {data:courses, isLoading: isCourseLoading} = useGetAllCourseQuery(undefined);
    const [createCourse] = useCreateCourseMutation()
        
    console.log(courses)
    const preRequisiteCoursesOption = courses?.data?.map((item) =>({
        value: item._id,
        label: item.title
    }))
    console.log(preRequisiteCoursesOption)

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
          const toastId = toast.loading('Creating...')
        const prerequisit = data?.preRequisiteCourses
        const courseData = {
            ...data,
            code: Number(data.code),
            credits: Number(data.credits),
            preRequisiteCourses: prerequisit?prerequisit?.map( item => (
               { course: item, isDeleted: false}
            )): []
        }

        console.log(courseData);

        try{
            const res = (await createCourse(courseData)) as TResponse<any>;
            if(res.error){
                toast.error( res.error.data.message, {id:toastId})
            } else{
                toast.success('Semester created', {id: toastId})
            }
        } catch(error){
            console.log(error)
            toast.error('Something went wrong', {id:toastId})
        }
    }



  return (
          <div>
            <span style={{fontSize: "25px", fontWeight:"700"}}>Create New Course</span>

    <Flex  style={{marginTop:"25px"}}>
         <AdmitForm onSubmit={onSubmit}>
               <InputForm type="text" name="title" label="Course Title" placeholder="Provide a title ..."/>
               <InputForm type="text" name="prefix" label="Course Prefix" placeholder="Provide a prefix ..."/>
               <InputForm type="text" name="code" label="Course Code" placeholder="Provide a code ..."/>
               <InputForm type="text" name="credits" label="Credits" placeholder="Provide a credit ..."/>
               <SelectForm name="preRequisiteCourses" label="PreRequisite Courses"
                  options={preRequisiteCoursesOption} mode="multiple" placeholder=" Select ..."
               />
               {/* <Button htmlType="submit">Submit</Button> */}
               <Flex gap={15} justify="end" align="center" style={{padding:"30px 0"}}>
                         <SubmitButton type="submit" submitButton="Create Course"></SubmitButton>
                         <ResetButton resetButton="Reset"></ResetButton>
               
                </Flex>
         </AdmitForm>
    </Flex>
          </div>
  );
};

export default CreateCourse;
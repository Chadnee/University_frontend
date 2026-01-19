import { Button, Col, Flex } from "antd";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import SelectForm from "../../form/SelectForm";
import { useCreateCourseMutation, useGetAllCourseQuery } from "../../../features/admin/courseManagementApi";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import type { TResponse } from "../../constants/global";
import { toast } from "sonner";

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
    <Flex justify = "center" align="ceneter">
       <Col span={6}>
         <AdmitForm onSubmit={onSubmit}>
               <InputForm type="text" name="title" label="title"/>
               <InputForm type="text" name="prefix" label="Prefix"/>
               <InputForm type="text" name="code" label="Code"/>
               <InputForm type="text" name="credits" label="Credits"/>
               <SelectForm name="preRequisiteCourses" label="PreRequisite Courses"
                  options={preRequisiteCoursesOption} mode="multiple" placeholder="If there is any PreRequisite Course, Select it"
               />
               <Button htmlType="submit">Submit</Button>
         </AdmitForm>
       </Col>
    </Flex>
  );
};

export default CreateCourse;
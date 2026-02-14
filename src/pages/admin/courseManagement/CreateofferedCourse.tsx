import { Flex} from "antd";
import { useGetAllAccademicDepartmentQuery} from "../../../features/admin/academicManagementApi";
import AdmitForm from "../../form/AdmitForm";
import SelectForm from "../../form/SelectForm";
import InputForm from "../../form/InputForm";
import {type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateOfferedCourseMutation, useGetAllAssignFacultiesQuery, useGetAllCourseQuery, useGetRegisteredSemesterQuery } from "../../../features/admin/courseManagementApi";
import {weekDaysOptions, type TError, type TOption } from "../../constants/global";
import { useEffect, useState } from "react";
import SelectFormWithWatch from "../../form/SelectFormWithWatch";
import moment from "moment";
import TimePickerForm from "../../form/TimePicker";
import { ResetButton, SubmitButton } from "../../../components/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import type { TFaculty } from "../../../types/userManagementTypes";

const CreateOfferedCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [academicFacultyOption, setAcademicFacultyOption] = useState<TOption | null >(null);
  
  const [ createOfferedCourse] = useCreateOfferedCourseMutation()
  const {data: registeredSemester, isLoading: isRegisteredSemesterLoading} = useGetRegisteredSemesterQuery([
    {name:'sort', value:'year'},
    {name: 'status', value:'ONGOING'}
  ]);
const {data: academicDepartment, isLoading: isacademicDepartmentLoading} = useGetAllAccademicDepartmentQuery(undefined);
  const {data: course, isLoading: iscourseLoading} = useGetAllCourseQuery(undefined);
  const {data: faculty, isFetching:isFacultyFetching} = useGetAllAssignFacultiesQuery(courseId, {skip: !courseId});
   //console.log(faculty)// in that case, all faculties is not needed, after selecting course, those faculies will be showed  only which are assigned for this course
  //console.log(registeredSemester)


   const registeredSemesterOptions = registeredSemester?.data?.map(item => ({
    value: item._id,
    label: `${item?.academicSemester?.name} ${item?.academicSemester?.year}`
  })) 
  const academicDepartmentOptions = academicDepartment?.data?.map(item => ({
    value: item._id,
    label: item.name
  })) 
  const courseOptions = course?.data?.map(item => ({
    value: item._id,
    label: item.title
  })) 
  const facultyOptions = faculty?.data?.faculties?.map((item : TFaculty) => (
    console.log("item", item),
    {
    value: item._id,
    label: item.name
  }))
  const facultyPlaceholder = !courseId?"Select course first ...":
      isFacultyFetching? "Loading faculties ..." :
      !facultyOptions?.length? "No faculty assigned, please assign first ...":
      "Select a Faculty ...";
  
  // Make specific faculty option is created according to select department to set the dynamic label and value automically
     useEffect(() => {
       if (!departmentId) return;
     
       const department = academicDepartment?.data?.find(
         (item) => item._id === departmentId
       );
     
       if (!department?.academicFaculty) return;
     
       setAcademicFacultyOption({
         value: department.academicFaculty._id,
         label: department.academicFaculty.name,
       });
     
}     , [departmentId, academicDepartment?.data]);
     
     
    console.log(academicFacultyOption)  
  const onSubmit : SubmitHandler<FieldValues> = async(data) => {
    // const toastId = toast.loading('Creating...');
 //console.log(data.academicFaculty)
 const offeredCourseData = {
    ...data, 
    maxCapacity: Number(data.maxCapacity),
    section: Number(data.section),
     startTime: moment(new Date(data.startTime)).format('HH:mm'),
     endTime: moment(new Date(data.endTime)).format('HH:mm'),
    
 } 
 console.log(offeredCourseData)

   try{
      const res = await createOfferedCourse(offeredCourseData)
       if(res.error){
        const err = res.error as TError
         toast.error(err.data.message);
       } else{
        console.log(res.data)
        toast.success("Successfuly Course Offered");
       }
   } 
  catch(error:unknown){
         const err = error as { data?: { message?: string } };
        console.log(err.data?.message)
            toast.error("Something went wrong")
      }
  }
  
  return (

    <div>
                <span style={{fontSize: "25px", fontWeight:"700"}}>Create Offered Course</span>
    
        <Flex  style={{marginTop:"25px"}}>

             <AdmitForm onSubmit={onSubmit}>
           <SelectForm options={registeredSemesterOptions} required name="semesterRegistration" disabled={isRegisteredSemesterLoading} label="Registered Semester" suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}></SelectForm>
          <SelectFormWithWatch options={academicDepartmentOptions} name="academicDepartment" label="Accademic Department" disabled={isacademicDepartmentLoading} onValueChange={setDepartmentId} suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}></SelectFormWithWatch>
         
          <SelectForm name="academicFaculty" label="Academic Faculty" fixedValue={academicFacultyOption?.value} disabled 
          options={academicFacultyOption? [academicFacultyOption] : []} placeholder={!academicFacultyOption? "Select department first (auto select)...": ""}/>
         
         <SelectFormWithWatch options={courseOptions} name="course" label="Course" disabled={iscourseLoading} onValueChange={setCourseId} suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}></SelectFormWithWatch>
         <SelectForm options={facultyOptions} required disabled={!courseId || isFacultyFetching ||!facultyOptions} name="faculty" label="Faculty" placeholder={facultyPlaceholder} suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}></SelectForm>
        {/* {
            !(courseId && !isFacultyFetching && !facultyOptions )?           
             <SelectForm options={facultyOptions} required disabled={!courseId || isFacultyFetching ||isfacultyLoading} name="faculty" label="Faculty" placeholder="Select a Faculty"></SelectForm>
             :(<SelectForm options={facultyOptions} required disabled name="faculty" label="Faculty" placeholder="No faculty assigned , please assigned first"></SelectForm>
)

        } */}
           <InputForm name="maxCapacity" label="Maximum Capacity" type="text" placeholder="Provide maximum capacity ..."/>
           <InputForm name="section" label="Section" type="text" placeholder="Provide a section ..."/>
           <SelectForm options={weekDaysOptions} mode="multiple" name="days" label="Days" suffixIcon={<CiCalendarDate style={{fontSize:"20px", color:'#000'}}/>} placeholder="Select days ..."/>
           <TimePickerForm name="startTime" label="Start time"/> 
           <TimePickerForm name="endTime" label="End time"/> 
          {/* <Button htmlType="submit"> Submit</Button> */}
           <Flex gap={15} justify="end" align="center" style={{padding:"30px 0"}}>
            <SubmitButton type="submit" submitButton="Create Offered"></SubmitButton>
            <ResetButton resetButton="Reset"></ResetButton>
                   
                    </Flex>
             </AdmitForm>
        </Flex>
        </div>
  );
};

export default CreateOfferedCourse;

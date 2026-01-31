 // <Row>
    //   <Col span={24}>
    //     <AdmitForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
    //       <Divider>Personal Info</Divider>
    //        <Row gutter={8}>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="name.firstName" label="First Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="name.middleName" label="Middle Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="name.lastName" label="Last Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <SelectForm options={gendersOptions} placeholder="Select gender" name="gender" label="Gender"></SelectForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <DatePickerInput name="dateOfBirth" label="Date of Birth"></DatePickerInput>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}}>
    //         <SelectForm options={bloodGroupsOptions} placeholder="Select blood group" name="bloodGroup" label="Blood Group"></SelectForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}}>
    //          <Controller
    //            name="image"
    //            render={({field: {onChange, value, ...field}}) =>(
    //             <Form.Item label="Picture">
    //                 <Input type="file"
    //                 value={value?.fileName}
    //                 {...field}
    //                 onChange={(e) => onChange(e.target.files?.[0])}
    //                 />
    //             </Form.Item>
    //            )}
    //          />
    //       </Col>
    //        </Row>
    //        <Divider>Contact Info</Divider>
    //        <Row gutter={8}>
    //          <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="email" label="Email"></InputForm>
    //       </Col>
    //           <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="contactNo" label="Contact No"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="emergencyContactInfo" label="Emergency Contact Info(Number)"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="presentAddress" label="Present Address"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="permanentAddress" label="Permanent Address"></InputForm>
    //       </Col>
    //        </Row>
    //        <Divider>Gurdian Info</Divider>
    //        <Row gutter={8}>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.fatherName" label="Father Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.fatherOccupation" label="Father Occupation"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.fatherContactNo" label="Father Contact No"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.motherName" label="Mother Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.motherOccupation" label="Mother Occupation"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.motherContactNo" label="Mother Contact No"></InputForm>
    //       </Col>
    //       </Row>
    //       <Divider>Local Gurdian Info</Divider>
    //       <Row gutter={8}>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.name" label="Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.occupation" label="occupation"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.contactNo" label="Contact No"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.address" label="Address"></InputForm>
    //       </Col>
    //       </Row>
    //       <Divider>Accademical Info</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{span:12}} lg={{span:12}} >
    //         <SelectForm name="admissionSemester" placeholder="Select admission semester" disabled={isSemesterLoading} options={semesterOptions} label="Admission Semester"></SelectForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:12}} >
    //         <SelectForm name="academicDepartment" placeholder="Select department" disabled={isDepartmentLoading} options={departmentOptions} label="Academic Department"></SelectForm>
    //       </Col>
    //       </Row>
    //       <Button htmlType="submit">Submit</Button>
    //     </AdmitForm>
    //   </Col>
    // </Row>
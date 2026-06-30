import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../types/academicManagementTypes";
import { DiJavascript } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaQrcode, FaTrophy } from "react-icons/fa6";
import { TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";
import type { TFaculty, TName, TStudent } from "../../types/userManagementTypes";
import graduationCap from '../../assets/images/graduation cap.png'
import bag from '../../assets/images/bag.png'
import books from '../../assets/images/books.png'
import cup from '../../assets/images/cup.png'
import malefaculty1 from '../../assets/images/malefaculty1.png' 
import malefaculty2 from '../../assets/images/malefaculty2.png' 
import femalefaculty1 from '../../assets/images/femalefaculty1.png' 
import femalefaculty2 from '../../assets/images/femalefaculty2.png' 
import gear from "../../assets/images/gear.png"
import roboticArm from "../../assets/images/robotic_arm.png"
import microChip from "../../assets/images/microchip.png"
import lightBulb from "../../assets/images/light_bulb.png"
import buildings from "../../assets/images/buildings.png"
import growthChart from "../../assets/images/growth_chart.png"
import aiBrain from "../../assets/images/ai-brain.png"
import sheildLock from "../../assets/images/sheild_lock.png"
import iotChip from "../../assets/images/iot_chip.png"
import pallate from "../../assets/images/pallate.png"
import { GiGraduateCap } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import { PiBookOpenTextBold } from "react-icons/pi";
import type { IconType } from "react-icons/lib";
import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"
import excellence from "../../assets/images/excellence.png"
import globe from "../../assets/images/globe.png"
import people from "../../assets/images/people.png"
import labFlask from "../../assets/images/labFlask.png"
import course1 from "../../assets/images/programee_1st.png"
import course2 from "../../assets/images/programee_2nd.png"
import course3 from "../../assets/images/programee_3rd.png"
import course4 from "../../assets/images/programee_4th.png"
import course5 from "../../assets/images/programee_5th.png"
import campusClub from "../../assets/images/campus_Club.png"
import campusSports from "../../assets/images/campus_sports.png"
import campusEvents from "../../assets/images/Campus_Events.png"
import campusArts from "../../assets/images/campus_arts.png"
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "September",
  "October",
  "November",
  "August",
  "December"
];

export const genders = ["male", "female", "other"];

export const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

export const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


export const monthOptions = monthNames.map((item) =>({
    value: item,
    label: item
}))

export const gendersOptions = genders.map((item) =>({
  value: item,
  label: item
}))

export const bloodGroupsOptions = bloodGroups.map((item) => ({
  value: item,
  label: item
}))

export const weekDaysOptions = weekDays.map((item) => ({
  value: item,
  label: item
}))


export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success:boolean;
  message: string
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueriParam = {
  name: string,
  value: boolean | React.Key
}

export type TAllUser = {
  _id: string
  id: string
  email: string
  needsPasswordChange: boolean
  role: string
  status: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  passWordChangedAt: string
}

//it is for registerd semester which semester is registered aslo
export type TSemester = {
  _id: string;
  academicSemester: TAcademicSemester;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string
}

export type TPreRequisiteCourse = {
  course: string;
  isDeleted: boolean
}
export type TCourse = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted: boolean;
  preRequisiteCourses: TPreRequisiteCourse[];
};

export type TFacultyWithCourse = {
    _id: string
  course: string
  faculties: TFaculty[]
  __v: number
}

export type TOfferedCourse = {
    _id: string
  semesterRegistration: string
  academicSemester: string
  academicFaculty: string
  academicDepartment: string
  course: TCourse
  faculty: string
  maxCapacity: number
  section: number
  days: string[]
  startTime: string
  endTime: string
  isDeleted: boolean
  __v: number
  enrolledCourses: any[]
  completedCourses: any[]
  completedCourseIds: any[]
  isPreRequisitesFulFilled: boolean
  isAlreadyEnrolled: boolean
}

export type TMyEnrollement = {
  _id: string
  semesterRegistration: TSemesterRegistration
  academicSemester: TAcademicSemester
  academicDepartment: TAcademicDepartment
  academicFaculty: TAcademicFaculty
  offeredCourse: TOfferedCourse
  course: TCourse
  student: TStudent
  faculty: TFaculty
  isEnrolled: boolean
  courseMarks: CourseMarks
  grade: string
  gradePoints: number
  isCompleted: boolean
}

export type TSemesterRegistration = {
  _id: string
  academicSemester: string
  status: string
  startDate: string
  endDate: string
  minCredit: number
  maxCredit: number
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export type CourseMarks = {
  classTest1: number
  midTerm1: number
  classTest2: number
  finalTerm: number
  _id: string
}

export type TEnrolledState = {
  _id: string
  student: string
  createdAt: string
  email: string
  lastUpdated: string
  studentId: string
  totalEnrolledCourses: number
  updatedAt: string
  gender: "male" | "female" | "other"
  name: TName
  academicDepartment: TAcademicDepartment
}

export type TOption = {
  value: string;
  label: string;
};

export type TUniversityStats = {
  id: number,
  icon: IconType,
  value: string,
  label: string
}

export type TNewsEventsData = {
    id: number,
    date: string,
    month: string,
    title: string,
    category: string,
    tag: string,
    description:string,
    image: string,
}

export type TVerticalMobileStat = {
  image: string;   
  value: string;   
  title: string;  
}

// Get custome image one by ony
export const getDataClass =<T,>(data: T[]=[])=> {
     if (!data.length) return []
     const result:T[] = [];
     let i = 0;

     while (result.length < 4) {
      result.push(data[i % data.length]);
      i++;
     }
     return result
}

export const getDataClassForAll = <T,>(data: T[] = []) => {
  return data;
};

export const maleGenderImageArray = [
   malefaculty1 , malefaculty2
]
export const femaleGenderImageArray = [
   femalefaculty1 , femalefaculty2  
]
export const classImageArray = [course1, course2, course3, course4, course5]

export const campusItems = [
  {
    title: "Clubs & Societies",
    image:campusClub  
  },
  {
    title: "Sports & Fitness",
    image:campusSports
  },
  {
    title: "Events & Activities",
    image: campusEvents
  },
  {
    title: "Arts & Culture",
    image: campusArts
  },
];

export const buttonBgColor = [
  "linear-gradient(90deg, #45a5f3ff, #0760c5ff)",
  "linear-gradient(90deg, #f87c07ff, #d00000)",
  "linear-gradient(90deg, #febe1eff, #f48c06)", 
  "linear-gradient(90deg, #7fb089ff, #3a8b30ff)"
]
export const buttonColors = ['#0acf52ff','#e7b025ff','#dc5009ff' ]

export const backgroundGroundGradients = [
  "linear-gradient(135deg, #f0854cff, #fc6480, #ff4d6d)",
  "linear-gradient(100deg, #9770eaff, #104a9bff)",
  "linear-gradient(160deg, #a47309ff, #d3bc08ff)",
  "linear-gradient(135deg, #667eea, #764ba2, #6dd5ed)"
]
// courseProgressData.ts
export const skills = [

  {
    key: "javascript",
    label: "JavaScript",
    percent: 85,
    color:  {
    '0%': '#febe1eff',
    '100%': '#f48c06',
  },
    iconColor: "#f48c06",
    trailColor:"#e6f4ff",
    rating: 4.2,
    icon: <DiJavascript/>
  },
  {
    key: "React-Redux",
    label: "React-Re",
    percent: 88,
    color:   {
    '0%': '#7fb089ff',
    '100%': '#3a8b30ff',
  },
    iconColor: "#3a8b30ff",
    trailColor:"#e6f4ff",
    rating: 4.5,
    icon:<RiReactjsLine/>
  },
 {
    key: "node",
    label: "Node.js",
    percent: 78,
    color:  {
    '0%': '#f87c07ff',
    '100%': '#e46d0bff',
  },
    iconColor: "#f06c20ff",
    trailColor:"#e6f4ff",
    rating: 4,
    icon:<FaQrcode/>
  },
 {
    key: "mongodb",
    label: "MongoDB",
    percent: 82,
    color: {
    '0%': '#45a5f3ff',
    '100%': '#0760c5ff',
  },
    iconColor: "#0760c5ff ",
    trailColor:"#e6f4ff",
    rating: 4.1,
    icon:<TbBrandMongodb/>
  },
 {
    key: "typescript",
    label: "TypeScript",
    percent: 76,
    color:  {
    '0%': '#7fb089ff',
    '100%': '#3a8b30ff',
  },
    iconColor: "#3a8b30ff",
    trailColor:"#e6f4ff",
    rating: 4,
    icon:<TbBrandTypescript/>
  },

];

export const info = [
   {
      image: graduationCap,
      quantity: 20000,
      startValue:1000,
      title: "Students Enrolled",
      sign:"+",
      imageColor:"#f3dfdc",
      textColor:"#de2808",
      // backgroundColor:"#fcd5ce"
   },
   {
      image: bag,
      quantity: 500,
      startValue:50,
      title: "Expert Faculty",
      sign:"+",
      imageColor:"#f2e6fd",
      textColor:"#7a0ce1",
      // backgroundColor:""
   },
   {
      image: books,
      quantity: 150,
      startValue:10,
      title: "Courses Offered ",
      sign:"+",
      imageColor:"#f9e3be",
      textColor:"#cb8409",
      // backgroundColor:""
   },
   {
      image: cup,
      quantity: 95,
      startValue:1,
      title: "Success Rate",
      sign:"%",
      imageColor:"#d8e9f8",
      textColor:"#1a76cb",
      // backgroundColor:""
   },
]

export const AcademicFaculties = [
  {
    id: 1,
    name: "Faculty of Mechanical Engineering",
    slug: "mechanical-engineering",
    icon: gear, 
    description: "Shaping innovative mechanical solutions for a sustainable future.",
    cta: "Explore"
  },
  {
    id: 2,
    name: "Faculty of Robotics & Automation",
    slug: "robotics-automation",
    icon: roboticArm,
    description: "Advancing robotics and automation for smarter tomorrow.",
    cta: "Explore"
  },
  {
    id: 3,
    name: "Faculty of Computer Science",
    slug: "computer-science",
    icon: microChip,
    description: "Empowering minds through computing, software, and emerging technologies.",
    cta: "Explore"
  },
  {
    id: 4,
    name: "Faculty of Electrical Engineering",
    slug: "electrical-engineering",
    icon: lightBulb,
    description: "Driving innovation in electrical systems and renewable energy.",
    cta: "Explore"
  },
  {
    id: 5,
    name: "Faculty of Civil Engineering",
    slug: "civil-engineering",
    icon: buildings,
    description: "Building resilient infrastructure for better communities.",
    cta: "Explore"
  },
  {
    id: 6,
    name: "Faculty of Applied Sciences",
    slug: "applied-sciences",
    icon: labFlask,
    description: "Exploring the fundamentals of science for real-world applications.",
    cta: "Explore"
  },
  {
    id: 7,
    name: "Faculty of Business Administration",
    slug: "business-administration",
    icon: growthChart,
    description: "Developing leaders with strategic thinking and business acumen.",
    cta: "Explore"
  },
  {
    id: 8,
    name: "Faculty of Artificial Intelligence",
    slug: "artificial-intelligence",
    icon: aiBrain,
    description: "Building intelligent systems for a future driven by AI and data.",
    cta: "Explore"
  },
  {
    id: 9,
    name: "Faculty of Cyber Security",
    slug: "cyber-security",
    icon: sheildLock,
    description: "Securing digital futures through advanced cyber security education.",
    cta: "Explore"
  },
  {
    id: 10,
    name: "Faculty of Internet of Things",
    slug: "internet-of-things",
    icon: iotChip,
    description: "Connecting devices and systems for a smarter world.",
    cta: "Explore"
  },
  {
    id: 11,
    name: "Faculty of Design & Innovation",
    slug: "design-innovation",
    icon: pallate,
    description: "Inspiring creativity and innovation through design thinking.",
    cta: "Explore"
  }
];

export const universityStats = [
  {
    id: 1,
    icon: GiGraduateCap,
    value: "25+",
    label: "Years of Excellence"
  },
  {
    id: 2,
    icon: MdPeopleAlt ,
    value: "12+",
    label: "Students Enrolled"
  },
  {
    id: 3,
    icon: PiBookOpenTextBold,
    value: "120+",
    label: "Faculties"
  },
  {
    id: 4,
    icon: FaTrophy,
    value: "98%",
    label: "Success Rate"
  }
];


export const newsEventsData : TNewsEventsData[] = [
  {id:1,
    image:news1,
    category: "Event",
    tag: "Superb",
    date: "20",
    month: "MAY",
    title: "International Research Conference 2024",
    description:
      "Scholars and researchers from around the world gather to share knowledge and explore severally.",
  },
  {
    id: 2,
    image: news2,
    category: "News",
    tag: "Star",
    date: "12",
    month: "JUN",
    title: "Techno University Ranked Among Top 50",
    description:
      "We are proud to be recognized for academic excellence, talent and for the status.",
  },
  {
    id: 3,
    image: news3,
    category: "Achievement",
    tag: "Premium",
    date: "03",
    month: "JUL",
    title: "Students Win National Robotics Competition",
    description:
      "Our team secured first place in the National Robotics Challenge in last year 2025.",
  },
  // {
  //   id: 1,
  //   date: "20",
  //   month: "MAY",
  //   title: "Techno University Hosts International Research Conference 2024",
  //   description:
  //     "Scholars and researchers from around the world gather to share knowledge and innovations.",
  //   image: news1,
    
  // },
  // {
  //   id: 2,
  //   date: "12",
  //   month: "JUN",
  //   title: "New Engineering Lab Inaugurated for Advanced Robotics",
  //   description:
  //     "The university launches a modern robotics laboratory to inspire future engineers.",
  //   image: news2,
    
  // },
  // {
  //   id: 3,
  //   date: "03",
  //   month: "JUL",
  //   title: "Annual Cultural Festival Celebrates Diversity on Campus",
  //   description:
  //     "Students showcase music, art, and performances representing multiple cultures.",
  //   image: news3,
    
  // },
];

export const VerticalMobileStat : TVerticalMobileStat [] = [
  {
    value: "25+",
    title: "Years of Excellence",
    image: excellence
  },
  {
    value: "30+",
    title: "Countries Represented",
    image: globe
  },
  {
    value: "120+",
    title: "Research Projects",
    image: labFlask
  },
  {
    value: "100+",
    title: "Student Organizations",
    image: people
  }
]






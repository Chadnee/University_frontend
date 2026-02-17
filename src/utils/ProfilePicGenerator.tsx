import maleStudent from '../assets/images/maleStudent.jpg';
import femaleStudent from '../assets/images/femaileStudent.jpg';

type TProfilePic = {
      gender: "male" | "female" | "other";
      style: React.CSSProperties;
}

export const ProfilePicGenerator = ({gender, style} :TProfilePic) => {
      return (
      <img src={(gender === 'male')? maleStudent : (gender === "female")?femaleStudent : ""} style={style}  alt="avater" />
      )
}


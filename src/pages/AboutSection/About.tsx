
import BannerSection from "./BannerSection";
import InfoSection from "./InfoSection";
import StateSection from "./StateSection";
// import React from "react";

const About = () => {
  
  return (
    <div
      style={{
        paddingTop: "100px",
        background: "#f6f9fc",
        width: "100%",
        height: "100%",
      }}
    >
    <BannerSection></BannerSection>
    <InfoSection></InfoSection>
    <StateSection></StateSection>
    
    </div>
  );
};

export default About;

{
  /* <div
              style={{ borderLeft: "1.5px solid #475569", height: "40px" }}
            ></div> */
}

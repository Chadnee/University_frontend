import { Flex } from "antd";
import logo from "../../../assets/images/logo.png";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import {
  logOut,
  selectCurrentToken,
  type TUser,
} from "../../../features/auth/authSlice";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";
import { RiUserAddLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaGripfire,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { MdDashboardCustomize, MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { verifyToken } from "../../../utils/verifyToken";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import whiteLogo from "../../../assets/images/logo(White).png";
import { FaHome } from "react-icons/fa";
import { IoFlask } from "react-icons/io5";

const Header = () => {
  const { isMobile} = useResponsive();
  const [setOpen, isSetOpen] = useState(false);

  const token = useAppSelector(selectCurrentToken);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  let user;

  if (token) {
    user = verifyToken(token);
    // console.log(user);
  }

  return (
    <div style={{}}>
      {!isMobile && (
        <div
          style={{
            background: "#000000",
            color: "#eff4f0",
            position: "fixed",
            top: 0,
            width: "100%",
            left: 0,
            right: "0",
            zIndex: "1000",
          }}
        >
          <Flex
            align="center"
            justify="space-between"
            style={{ padding: "10px 40px", fontSize: "12px" }}
          >
            <Flex align="center" justify="center" gap={30}>
              <Flex gap={3} align="center">
                <MdOutlineEmail style={{ fontSize: "14px" }}></MdOutlineEmail>
                <span> info@techno.edu.ac.bd</span>
              </Flex>
              <Flex gap={3} align="center">
                <IoIosCall style={{ fontSize: "14px" }}></IoIosCall>
                <span>+880 1234-567890</span>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" gap={60}>
              <Flex align="center" justify="center" gap={10}>
                <span>Students</span>
                <span>|</span>
                <span>Faculty</span>
                <span>|</span>
                <span>Alumni</span>
                <span>|</span>
                <span>Career</span>
                <span>|</span>
                <span>News & Events</span>
              </Flex>
              <Flex align="center" justify="center" gap={14}>
                <FaFacebookF></FaFacebookF>
                <FaTwitter></FaTwitter>
                <TiSocialLinkedin
                  style={{ fontSize: "19px" }}
                ></TiSocialLinkedin>
                <FaInstagram style={{ fontSize: "14px" }}></FaInstagram>
              </Flex>
            </Flex>
          </Flex>
        </div>
      )}

      {isMobile ? (
        <div
          style={{
            position: "fixed",
            top: isMobile ? 0 : 37.5,
            zIndex: 1000,
            left: 12,
            right: 12,
            background: "rgba(255, 255, 255, 0.12)", // transparent white
            backdropFilter: "blur(16px)", // main glass effect
            WebkitBackdropFilter: "blur(12px)", // for Safari support

            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <Flex
            align="center"
            justify="space-between"
            style={{ padding: "20px 16px" }}
          >
            <img src={logo} style={{ height: "40px" }} alt="" />
            <Flex align="center" gap={26}>
              <LuSearch style={{ fontSize: "25px" }}></LuSearch>
              <button
                onClick={() => isSetOpen(!setOpen)}
                style={{ border: "none", background: "none" }}
              >
                <GiHamburgerMenu style={{ fontSize: "25px" }}></GiHamburgerMenu>
              </button>
            </Flex>
          </Flex>
          <div>
            {setOpen && (
              <div
                style={{
                  height: "100vh",
                  background: "#000",
                  position: "absolute",
                  inset: "0",
                  zIndex: "1000",
                  left: 30,
                  top: "0",
                }}
              >
                <Flex vertical justify="space-between" style={{ color: "#fff", padding: "20px", height:"100%" }}>
                  <Flex justify="space-between" align="center">
                    <img src={whiteLogo} style={{ height: "50px" }} alt="" />
                    <span
                      onClick={() => isSetOpen(false)}
                      style={{ fontSize: "30px" }}
                    >
                      <RxCross2></RxCross2>
                    </span>
                  </Flex>

                  <Flex vertical gap={30} style={{ paddingTop: "40px" }}>
                     <Flex align="center" gap={4}>
                      <FaHome
                        style={{ fontSize: "23px" }}
                      ></FaHome>
                      <span>Home</span>
                    </Flex>
                     <Flex align="center" gap={4}>
                      <HiAcademicCap
                        style={{ fontSize: "23px" }}
                      ></HiAcademicCap>
                      <span>About Us</span>
                    </Flex>
                    <Flex align="center" gap={4}>
                      <HiAcademicCap
                        style={{ fontSize: "23px" }}
                      ></HiAcademicCap>
                      <span>Academics</span>
                    </Flex>
                    <Flex align="center" gap={2}>
                       <RiUserAddLine
                        style={{ fontSize: "23px" }}
                      ></RiUserAddLine>
                      <span>Admission</span>
                      </Flex>
                    <Flex align="center" gap={2}>
                       <FaGripfire style={{ fontSize: "23px" }}></FaGripfire>
                       <span>Campus Life</span>
                     </Flex>
                    <Flex align="center" gap={2}>
                       <IoFlask style={{ fontSize: "23px" }}></IoFlask>
                       <span>Research</span>
                     </Flex>
                  </Flex>

                  <Flex vertical gap={20}>
                    <Link to={`/${(user as TUser)?.role}/dashboard`}>
                    <button
                      style={{
                        padding: "12px 24px",
                        fontSize: "15px",
                        borderRadius: "5px",
                        background: "#ce8908",
                        border: "none",
                        color: "#fff6f6",
                        width:"100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:"center",
                        gap:"10px",
                      }}
                    >  <MdDashboardCustomize style={{fontSize:"26px"}}></MdDashboardCustomize>
                      <span>Dashboard</span>
                    </button>
                  </Link>
                    <Link to={`/${(user as TUser)?.role}/dashboard`}>
                    <button
                      style={{
                        padding: "14px 24px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        background:"none",
                        color: "#fff6f6",
                        width:"100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:"center",
                        gap:"10px",
                        border: "1px solid #fff6f6",
                      }}
                    >  <BsArrowCounterclockwise style={{fontSize:"26px"}}></BsArrowCounterclockwise>
                      <span>Log Out</span>
                    </button>
                  </Link>
                  </Flex>
                </Flex>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "fixed",
            top: isMobile ? 0 : 37.5,
            zIndex: 1000,
            left: 30,
            right: 30,
            background: "rgba(255, 255, 255, 0.30)", // transparent white
            backdropFilter: "blur(12px)", // main glass effect
            WebkitBackdropFilter: "blur(12px)", // for Safari support

            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{ padding: "15px 20px" }}
          >
            <Flex justify="center" align="center">
              <img src={logo} style={{ height: "45px" }} alt="" />
            </Flex>
            <div
              style={{ borderLeft: "1.5px solid #b6b1b1", height: "30px" }}
            ></div>
            {!token ? (
              <Link
                to="/login"
                style={{
                  paddingRight: "40px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Login
              </Link>
            ) : (
              <Flex justify="space-between" align="center" gap={40}>
                {/* <span style={{paddingRight:"40px",  fontWeight:"600", cursor:"pointer"}}>Dashboard</span> */}
                <Flex
                  justify="center"
                  align="center"
                  gap={40}
                  style={{ fontSize: "17px" }}
                >
                  {/* <BsArrowCounterclockwise></BsArrowCounterclockwise> */}
                  <span style={{ cursor: "pointer" }}>Home</span>
                  <span style={{ cursor: "pointer" }}>About Us</span>
                  <Flex align="center" gap={4}>
                    <span>Academics</span>
                    <HiAcademicCap style={{ fontSize: "23px" }}></HiAcademicCap>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <span>Admission</span>
                    <RiUserAddLine style={{ fontSize: "23px" }}></RiUserAddLine>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <span>Campus Life</span>
                    <FaGripfire style={{ fontSize: "23px" }}></FaGripfire>
                  </Flex>
                  <span style={{ cursor: "pointer" }}>Research</span>
                  <Flex
                    align="center"
                    gap={3}
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    <span>Logout</span>
                    <BsArrowCounterclockwise
                      style={{ fontSize: "23px" }}
                    ></BsArrowCounterclockwise>
                  </Flex>
                </Flex>

                <Flex align="center" gap={30}>
                  <div
                    style={{
                      borderLeft: "1.5px solid #c5c1c1",
                      height: "30px",
                    }}
                  ></div>
                  <LuSearch style={{ fontSize: "25px" }}></LuSearch>
                  <Link to={`/${(user as TUser)?.role}/dashboard`}>
                    <button
                      style={{
                        padding: "10px 24px",
                        fontSize: "15px",
                        borderRadius: "5px",
                        background: "#db930d",
                        border: "none",
                        color: "#fff6f6",
                      }}
                    >
                      Dashboard
                    </button>
                  </Link>
                </Flex>
              </Flex>
            )}
          </Flex>
        </div>
      )}
    </div>
  );
};

export default Header;

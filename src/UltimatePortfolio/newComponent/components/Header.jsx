import { Drawer } from "antd";
import ScrollProgressBar from "./ScrollProgressBar";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons"; // <-- Add this import
// import img from '../../../../public'
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleMobileDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <ScrollProgressBar />
      <Drawer
        title="Menu"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        placement="left"
        className="mobile-drawer"
      >
        <ul className="nav-menu-wrapper mobile-nav-menu-wrapper">
          <li className="nav-menu">
            <a href="#home " onClick={() => setIsDrawerOpen(false)}>
              {" "}
              Home
            </a>
          </li>
          <li className="nav-menu">
            <a href="#about" onClick={() => setIsDrawerOpen(false)}>
              {" "}
              About
            </a>
          </li>
          <li className="nav-menu">
            <a href="#tech" onClick={() => setIsDrawerOpen(false)}>
              {" "}
              Tech
            </a>
          </li>
          <li className="nav-menu">
            <a href="#get_in_touch" onClick={() => setIsDrawerOpen(false)}>
              {" "}
              Get in Touch{" "}
            </a>
          </li>
        </ul>
      </Drawer>
      <div className="header-main-wrapper">
        <div className="custom-container">
          <div className="navbar-container">
            <div className="detail-left">
              <ul className="nav-menu-wrapper nav-menu-wrapper-desktop">
                <li className="nav-menu">
                  <a href="#home "> Home</a>
                </li>
                <li className="nav-menu">
                  <a href="#about"> About</a>
                </li>
                <li className="nav-menu">
                  <a href="#tech"> Tech</a>
                </li>
                <li className="nav-menu">
                  <a href="#get_in_touch"> Get in Touch </a>
                </li>
              </ul>

              <div className="mobile-menu-button-container">
                <button
                  className="mobile-menu-button"
                  onClick={toggleMobileDrawer}
                >
                  <MenuOutlined style={{ fontSize: "20px" }} />{" "}
                </button>
              </div>
            </div>
            <div className="detail-right">
              <div className="navbar-avatar-container">
                <div className="button-wrapper ">
                  <div className="button-bg"></div>
                  {/* <button> */}
                  <img
                    src="./images/heroSlider/avatar-pic.jpg"
                    alt="avatar-image"
                  />
                  {/* </button/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

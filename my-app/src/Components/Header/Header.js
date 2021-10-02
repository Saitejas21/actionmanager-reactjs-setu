//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaChartBar } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiLifeBuoy, FiMoon, FiLock } from "react-icons/fi";
import { RiBracesLine, RiStackLine } from "react-icons/ri";
import { IoBusinessOutline } from "react-icons/io5";
import { BiFace } from "react-icons/bi";




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";



const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "S" : "SETU"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<RiBracesLine />}>Category</MenuItem>
              <MenuItem icon={<RiStackLine />}>Stack</MenuItem>
              <MenuItem icon={<FaChartBar />}>Statistics</MenuItem>
              <MenuItem icon={<IoBusinessOutline />}>Organisation</MenuItem>
              <MenuItem icon={<FiLifeBuoy />}>Help</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="circle">
              <MenuItem icon={<FiMoon />}>Dark Mode</MenuItem>
              <MenuItem icon={<FiLock />}>Lock</MenuItem>
              <MenuItem icon={<BiFace />}>Profile</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    
  ];

  return (
    <nav>
      
      <div className="navbar-links-container">
        {}
        <Button component="a" href="/about">
          About
        </Button>
        <Button component="a" href="/contact">
          Contact
        </Button>
        <Button component="a" href="/LoginSignup">
          Signup
        </Button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      {/* Drawer and menu items remain unchanged */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        {/* ... (your Drawer content) */}
      </Drawer>
    </nav>
  );
};

export default Navbar;

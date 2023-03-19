import React, { useState } from "react";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function Signupbutton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <span>
        <button onClick={handleOpenMenu} className="primary-button">Sign Up Now</button>
      </span>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <List>
          <MenuItem onClick={handleCloseMenu}>Patient</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Doctor</MenuItem>
        </List>
      </Menu>
    </span>
  );
}

export default Signupbutton;
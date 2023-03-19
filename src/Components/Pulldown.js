import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function DropdownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <span>Language</span>  
      <ExpandMoreIcon onClick={handleOpenMenu}>
      </ExpandMoreIcon>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <List>
          <MenuItem onClick={handleCloseMenu}>English</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Mandarin</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Hindi</MenuItem>
        </List>
      </Menu>
    </span>
  );
}

export default DropdownMenu;
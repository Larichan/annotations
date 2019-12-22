import React, { useState } from 'react';
import { Typography, AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <AppBar position="static">
      <Toolbar>

        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >



          <Link to="/AddAnnotations" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>Add an annotation</MenuItem>
          </Link>

          <Link to="/SeeAnnotations" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>See annotations</MenuItem>
          </Link>


          <Link to="/AddCategory" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>Add a category</MenuItem>
          </Link>
        </Menu>

        <Typography color="inherit" align="center">
          ANNOTATION SYSTEM
                </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header

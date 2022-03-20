import React from 'react'
import useStyles from './styles';
import { Navbar } from 'react-bootstrap';

import logo from '../../assests/1.png';

const Header = () => {
  const classes = useStyles();

  return (
    <>
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="" className= {classes.header}>
            <img
              src={logo}
              width="150"
              height="100"
            />
            </Navbar.Brand>
          
        </Navbar>
    </>
  )
}

export default Header
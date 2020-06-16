import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,InputGroup, FormControl,Image} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
// import {FaRegUser,FaRegBell} from 'react-icons/fa'
import profile from '../../images/profile.jpg'

function Navmenu() {
    return (
        <header>
        <Navbar collapseOnSelect bg="white" variant="light">
            <Link to="/" className="navbar-brand font-weight-bold text-dark">Q&A</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="navbar-search mr-auto my-2 my-sm-0">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default" className="border-0 bg-white">
                            <BsSearch className="text-orange"/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    className="border-0"
                    placeholder="Search for questions"
                    />
                </InputGroup>
            </Nav>

            <Nav className="ml-auto profile-info">
                {/* <Nav.Link href="#features">
                    <FaRegUser size="1.2em"/>
                </Nav.Link>
                <Nav.Link href="#pricing">
                    <FaRegBell size="1.2em"/>
                </Nav.Link> */}
            
                <NavDropdown title={
                    <div className="profile-dropdown d-flex align-items-center ml-2 pull-right">
                        <Image src={profile} roundedCircle className="mr-1"/>
                        <p className="m-0 d-none d-sm-block">Maruf Ahmed</p>
                    </div>
                } id="collasible-nav-dropdown" alignRight>
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        </header>
    )
}

export default Navmenu

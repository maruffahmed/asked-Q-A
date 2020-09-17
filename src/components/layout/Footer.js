import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import {FaFacebookSquare,FaTwitterSquare,FaLinkedin} from 'react-icons/fa'

function Footer() {
    return (
        <footer>
        <Jumbotron className="mb-0 bg-pink" fluid>
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">

                    <div className="social-link mb-2">
                        <ul>
                            <li>
                                <a href="/">
                                    <FaFacebookSquare size="1.5rem"/>
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <FaTwitterSquare size="1.5rem"/>
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <FaLinkedin size="1.5rem"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="text-dark">Copyright &copy; 2020 All rights reserved.</p>
                </div>
            </Container>
        </Jumbotron>
        </footer>
    )
}

export default Footer

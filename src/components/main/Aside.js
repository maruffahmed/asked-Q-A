import React from 'react'
import {BsGridFill} from 'react-icons/bs'
import {Form} from "react-bootstrap"
import {motion,AnimatePresence} from 'framer-motion'

let departments = ["All","Marketing","Legal","Financial","Tech","Product","Sales","Programming"];

const aside = {
    hide:{
        opacity : 0,
        transition: {
            when: "afterChildren",
        }
    },
    show : {
        opacity: 1,
        transition:{
            when: "beforeChildren"
        }
    }
}

const aiseItems = {
    hide : {
        opacity : 0
    },
    show : i => ({
        opacity : 1,
        transition: {
            delay: i * 0.1,
        }
    })
}

function Aside({active}) {
    return (
        <AnimatePresence>
            {
                active && (
                    <motion.aside 
                    className={active ? "active" : null}
                    variants={aside}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    >
                        <h6 className="text-dark">{<BsGridFill/>} Departments</h6>

                        <ul className="filter-list mt-4">
                            {
                                departments && (
                                    departments.map((dep,i) => {
                                        return (
                                            <motion.li 
                                            key={dep}
                                            custom={i}
                                            variants={aiseItems}
                                            >
                                                <Form.Check
                                                type="checkbox"
                                                id={`checkbox-${dep}`}
                                                label={dep}
                                                />
                                            </motion.li>
                                        )
                                    })
                                )
                            }

                        </ul>
                    </motion.aside>
                )
            }
        </AnimatePresence>
    )
}

export default Aside

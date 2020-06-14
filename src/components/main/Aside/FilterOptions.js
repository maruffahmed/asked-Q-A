import React from 'react'
import {motion } from 'framer-motion'
import {Form} from "react-bootstrap"

const aiseItems = {
    hide : {
        opacity : 0
    },
    show : i => ({
        opacity : 1,
        transition: {
            delay: i * 0.1
        }
    })
}

function FilterOptions({departments}) {
    return (
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
                                custom
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
    )
}

export default FilterOptions

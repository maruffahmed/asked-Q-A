import React from 'react'
import {BsGridFill} from 'react-icons/bs'
import {motion,AnimatePresence } from 'framer-motion'
import FilterOptions from './Aside/FilterOptions'

let departments = ["All","Marketing","Legal","Financial","Tech","Product","Sales","Programming"];

const aside = {
    hide:{
        transition: {
            when: "afterChildren"
        }
    },
    show : {
        transition:{
            when: "beforeChildren"
        }
    }
}

function Aside({active}) {
    return (
        <AnimatePresence>
            <motion.aside 
            className={active ? "active" : null}
            variants={aside}
            initial="hide"
            animate="show"
            >
                <h6 className="text-dark">{<BsGridFill/>} Departments</h6>

                <FilterOptions departments={departments}/>
            </motion.aside>
        </AnimatePresence>
    )
}

export default Aside

import React from 'react'
import {motion} from 'framer-motion'

const pageTransition = {
    hide : {
        opacity : 0
    },
    show : {
        opacity : 1
    },
    exit : {
        opacity : 0,
        transition : {
            duration : 0.5
        }
    }
}

function NotFound() {
    return (
        <motion.div
        className="not-found-page d-flex flex-column flex-sm-row justify-content-center align-items-center"
        variants={pageTransition}
        initial="hide"
        animate="show"
        exit="exit"
        >
            <h1 className="text-dark">404</h1>
            <p className="m-0 ml-sm-2">Page not found</p>
        </motion.div>
    )
}

export default NotFound

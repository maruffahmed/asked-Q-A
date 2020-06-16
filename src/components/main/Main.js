import React,{ useState }  from 'react'
import Aside from './Aside'
import Timeline from './Timeline'
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

function Main() {
    const [asideActive, setAsideActive] = useState(false);
    return (
        <motion.main 
        className="main-section mt-5"
        variants={pageTransition}
        initial="hide"
        animate="show"
        exit="exit"
        >
            {/* <motion.div 
            className="page-transition"
            variants={pageTransition}
            initial="show"
            animate="hide"
            exit="show"
            ></motion.div> */}

            <div className="container-custom d-flex">
                <Aside active={asideActive}/>
                <Timeline active={asideActive} activeAside={setAsideActive}/>
            </div>
        </motion.main>
    )
}

export default Main

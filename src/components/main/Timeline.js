import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Badge} from 'react-bootstrap'
import {FaFire,FaUser} from 'react-icons/fa'
import {BsFilterLeft} from 'react-icons/bs'
import {motion} from 'framer-motion'

const timeline = {
    hide : {
        transition : {
            when : "afterChildren"
        }
    },
    show : {
        transition : {
            when : "beforeChildren"
        }
    }
}

const question = {
    hide : {
        opacity : 0
    },
    show : i => ({
        opacity : 1,
        transition: {
            delay: i * 0.2
        }
    })
}

function Timeline({active,activeAside}) {
    return (
        <motion.div 
        className="timeline mt-5"
        variants={timeline}
        initial="hide"
        animate="show"
        >

            <div className="filter-btn my-2 d-md-none" onClick={() => activeAside(!active)}>
                {<BsFilterLeft size="2.5rem" className="text-dark"/>}
            </div>

            <motion.div
            custom={1}
            variants={question}
            >
                <Card 
                className="p-3 shadow-sm mb-3"
                
                >
                    <div className="tags d-flex">
                        <Badge pill variant="danger" className="mr-3">{<FaFire/>} Populer Question</Badge>
                        <Badge pill variant="primary" className="mr-3">Legal</Badge>
                    </div>

                    <Link to="single">
                        <Card.Title as="h5" className="mt-4 text-dark">What comes first, a chicken or egg?</Card.Title>
                    </Link>

                    <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                        <div className="ask-by">
                            <p className="text-secondary small m-0">Asked by - <b>Juairea Akter</b></p>
                            <small className="text-secondary m-0">12 January 2020, 5:45 PM</small>
                        </div>

                        <small className="text-secondary">5 answers</small>

                    </div>
                </Card>

            </motion.div>

            <motion.div
            custom={2}
            variants={question}
            >
                <Card 
                className="p-3 shadow-sm mb-3"
                
                >
                    <div className="tags d-flex">
                        <Badge pill variant="orange" className="mr-3">{<FaUser/>} My Question</Badge>
                        <Badge pill variant="secondary" className="mr-3">Product</Badge>
                    </div>

                    <Link to="single">
                        <Card.Title as="h5" className="mt-4 text-dark">Why sky is blue?</Card.Title>
                    </Link>

                    <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                        <div className="ask-by">
                            <p className="text-secondary small m-0">Asked by - <b>Md Maruf Ahmed</b></p>
                            <small className="text-secondary m-0">20 march 2020, 5:00 PM</small>
                        </div>

                        <small className="text-secondary">2 answers</small>

                    </div>
                </Card>
            
            </motion.div>
            
            <motion.div
            custom={3}
            variants={question}
            >
                <Card 
                className="p-3 shadow-sm mb-3"
                
                >
                    <div className="tags d-flex">
                        <Badge pill variant="orange" className="mr-3">{<FaUser/>} My Question</Badge>
                        <Badge pill variant="info" className="mr-3">Tech</Badge>
                        <Badge pill variant="dark" className="mr-3">Programming</Badge>
                    </div>

                    <Link to="single">
                        <Card.Title as="h5" className="mt-4 text-dark">Hi, do you have a good A/B testing tools to recommend to push features gradually to users?</Card.Title>
                    </Link>

                    <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                        <div className="ask-by">
                            <p className="text-secondary small m-0">Asked by - <b>Md Maruf Ahmed</b></p>
                            <small className="text-secondary m-0">20 march 2020, 5:00 PM</small>
                        </div>

                        <small className="text-secondary">2 answers</small>

                    </div>
                </Card>
            
            </motion.div>

        </motion.div>
    )
}

export default Timeline

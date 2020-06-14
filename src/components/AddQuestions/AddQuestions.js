import React, { useState } from 'react'
import {Button,Form} from 'react-bootstrap'
import {motion,AnimatePresence} from 'framer-motion'


const questionForm = {
    hide : {
        opacity : 0,
        transition : {
            when : "afterChildren"
        }
    },
    show : {
        opacity : 1,
        transition : {
            when : "beforeChildren"
        }
    }
}

const formElement = {
    hide : i => ( {
        opacity : 0,
        transition: {
            delay: i * 0.2
        }
    }),
    show : i => ({
        opacity : 1,
        transition: {
            delay: i * 0.1
        }
    })
}

function AddQuestions() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <div className="add-questions bg-pink">
            <div className="container-custom">
                <AnimatePresence>
                    
                    <motion.div 
                    className="add-questions_triger text-dark p-4 position-absolute shadow rounded"
                    >
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <h5 className="text-dark">What is your questions?</h5>
                            <Button variant="orange" onClick={() => setIsFormOpen(!isFormOpen)}>Ask a question</Button>
                        </div>

                        <AnimatePresence>
                            {
                                isFormOpen && (

                                    <motion.div 
                                    className="add-questions_form mt-3"
                                    variants={questionForm}
                                    initial="hide"
                                    animate="show"
                                    exit="hide"
                                    >
                                        <form>
                                            <motion.div
                                            custom={1}
                                            variants={formElement}
                                            >
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Your question</Form.Label>
                                                    <Form.Control as="textarea" rows="3" />
                                                </Form.Group>

                                            </motion.div>

                                            <motion.div
                                            custom={2}
                                            variants={formElement}
                                            >
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label>Select a category</Form.Label>
                                                    <Form.Control as="select" custom>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            
                                            </motion.div>

                                            <motion.div
                                            custom={3}
                                            variants={formElement}
                                            >
                                                <Button variant="orange" onClick={() => setIsFormOpen(!isFormOpen)}>Ask Now</Button>
                                            
                                            </motion.div>
                                        </form>
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </motion.div>

                </AnimatePresence>
            </div>
        </div>
    )
}

export default AddQuestions

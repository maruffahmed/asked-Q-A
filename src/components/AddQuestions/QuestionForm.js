import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {Button,Form} from 'react-bootstrap'

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

function QuestionForm({isFormOpen,setIsFormOpen}){
    return (
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
    )
}

export default QuestionForm
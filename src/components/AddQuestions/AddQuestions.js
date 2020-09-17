import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import {motion,AnimatePresence} from 'framer-motion'
import QuestionForm from './QuestionForm'


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

function AddQuestions() {
    // add question form toggle
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <motion.div 
        className="add-questions bg-pink"
        variants={pageTransition}
        initial="hide"
        animate="show"
        exit="exit"
        >
            <div className="container-custom">
                <AnimatePresence>
                    
                    <motion.div 
                    className="add-questions_triger text-dark p-4 position-absolute shadow rounded"
                    >
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <h5 className="text-dark">What is your questions?</h5>
                            <Button variant="orange" onClick={() => setIsFormOpen(!isFormOpen)}>Ask a question</Button>
                        </div>

                        <QuestionForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
                        
                    </motion.div>

                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default AddQuestions

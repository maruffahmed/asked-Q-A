import React from 'react'
import {Container} from 'react-bootstrap'
import {motion} from 'framer-motion'
import SingleQuestion from './Questions/SingleQuestion'
import SingleQuestionAns from './Answers/SingleQuestionAnswers'
import AnswerForm from './Answers/AnswerForm'


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

function SingleQuestionPage() {
    return (
        <motion.main 
        className="main-section mt-5"
        variants={pageTransition}
        initial="hide"
        animate="show"
        exit="exit"
        >
            <Container>
                <SingleQuestion/>
                <SingleQuestionAns/>
                <AnswerForm/>
            </Container>
        </motion.main>
    )
}

export default SingleQuestionPage

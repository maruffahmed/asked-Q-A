import React from 'react'
import {Button} from 'react-bootstrap'

function AddQuestions() {
    return (
        <div className="add-questions bg-pink">
            <div className="container-custom">
                <div className="add-questions_form text-dark d-flex flex-column flex-md-row justify-content-between align-items-center p-4 position-absolute shadow rounded">
                    <h5>What is your questions?</h5>
                    <Button variant="orange">Ask a question</Button>
                </div>
            </div>
        </div>
    )
}

export default AddQuestions

import React from 'react'
import {Button,Form} from 'react-bootstrap'

function AnswerForm() {
    return (
        <div className="answer-form mt-4">
            <h5 className="text-dark">Your answer</h5>
            <hr/>
            <form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="orange">Answer</Button>
            </form>
        </div>
    )
}

export default AnswerForm

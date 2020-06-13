import React from 'react'
import {Card, Badge} from 'react-bootstrap'
import {FaFire,FaUser} from 'react-icons/fa'
import {BsFilterLeft} from 'react-icons/bs'

function Timeline({active,activeAside}) {
    return (
        <div className="timeline mt-5">
            <div className="filter-btn my-2 d-md-none" onClick={() => activeAside(!active)}>
                {<BsFilterLeft size="2.5rem"/>}
            </div>
            <Card className="p-3 shadow-sm mb-3">
                <div className="tags d-flex">
                    <Badge pill variant="danger" className="mr-3">{<FaFire/>} Populer Question</Badge>
                    <Badge pill variant="primary" className="mr-3">Legal</Badge>
                </div>

                <Card.Title as="h5" className="mt-4 text-dark">What is first, a chicken or egg?</Card.Title>

                <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                    <div className="ask-by">
                        <p className="text-secondary small m-0">Asked by - <b>Juairea Akter</b></p>
                        <small className="text-secondary m-0">12 January 2020, 5:45 PM</small>
                    </div>

                    <small className="text-secondary">5 answers</small>

                </div>
            </Card>

            <Card className="p-3 shadow-sm mb-3">
                <div className="tags d-flex">
                    <Badge pill variant="orange" className="mr-3">{<FaUser/>} My Question</Badge>
                    <Badge pill variant="secondary" className="mr-3">Product</Badge>
                </div>

                <Card.Title as="h5" className="mt-4 text-dark">Why sky is blue?</Card.Title>

                <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                    <div className="ask-by">
                        <p className="text-secondary small m-0">Asked by - <b>Md Maruf Ahmed</b></p>
                        <small className="text-secondary m-0">20 march 2020, 5:00 PM</small>
                    </div>

                    <small className="text-secondary">2 answers</small>

                </div>
            </Card>

            <Card className="p-3 shadow-sm mb-3">
                <div className="tags d-flex">
                    <Badge pill variant="orange" className="mr-3">{<FaUser/>} My Question</Badge>
                    <Badge pill variant="info" className="mr-3">Tech</Badge>
                    <Badge pill variant="dark" className="mr-3">Programming</Badge>
                </div>

                <Card.Title as="h5" className="mt-4 text-dark">Hi, do you have a good A/B testing tools to recommend to push features gradually to users?</Card.Title>

                <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                    <div className="ask-by">
                        <p className="text-secondary small m-0">Asked by - <b>Md Maruf Ahmed</b></p>
                        <small className="text-secondary m-0">20 march 2020, 5:00 PM</small>
                    </div>

                    <small className="text-secondary">2 answers</small>

                </div>
            </Card>
        </div>
    )
}

export default Timeline

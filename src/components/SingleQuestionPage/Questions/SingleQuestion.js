import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Card,Badge} from 'react-bootstrap'
import {FaRegHeart,FaHeart} from 'react-icons/fa'

function SingleQuestion() {
    const [like, setLike] = useState(false);
    return (
        <Card 
        className="p-3 shadow-sm mb-3"
        
        >
            <div className="tags">
                <Link to="cetagory/legal" className="m-0">
                    <Badge pill variant="primary" className="mr-3">Legal</Badge>
                </Link>
            </div>
            <Card.Title as="h5" className="mt-4 text-dark">What comes first, a chicken or egg?</Card.Title>

            <div className="question-info mt-3 d-flex justify-content-between align-items-center">
                <div className="ask-by">
                    <p className="text-secondary small m-0">Asked by - <b>Juairea Akter</b></p>
                    <small className="text-secondary m-0">12 January 2020, 5:45 PM</small>
                </div>

                <div className="d-flex align-items-center">
                    <small className="text-secondary mr-3">5 answers</small>
                    <div className="like-btn">
                        {
                            like ? 
                                <FaHeart className="text-dark like active" onClick={() => setLike(!like)}/>
                                : 
                                <FaRegHeart className="text-dark like" onClick={() => setLike(!like)}/>

                        }
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default SingleQuestion

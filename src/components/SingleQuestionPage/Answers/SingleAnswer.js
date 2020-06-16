import React,{useState} from 'react'
import {Button,Badge,Card} from 'react-bootstrap'
import {FaLongArrowAltUp,FaLongArrowAltDown} from 'react-icons/fa'

function SingleAnswer() {
    let [upVote, setUpVote] = useState(false);
    let [downVote, setDownVote] = useState(false);
    let countUp = upVote ? 11 : 10;
    let countDown = downVote ? 6 : 5;
    return (
        <div className="answer text-dark mb-3">
            <Card className="p-3">
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut temporibus aliquid est sit, consequatur magni dignissimos id exercitationem necessitatibus quis, vitae sapiente possimus aspernatur! Fugit commodi non fuga provident?</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 small">Answerd by - <b>Maruf Ahmed</b></p>
                    <div className="vote-btn d-flex">
                        <Badge className="vote mr-2" variant="success" onClick={() => setUpVote(!upVote)}><FaLongArrowAltUp/> {countUp}</Badge>
                        <Badge className="vote" variant="danger" onClick={() => setDownVote(!downVote)}><FaLongArrowAltDown/> {countDown}</Badge>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SingleAnswer

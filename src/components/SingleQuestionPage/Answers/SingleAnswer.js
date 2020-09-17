import React,{useState} from 'react'
import {Badge,Card} from 'react-bootstrap'
import {FaLongArrowAltUp,FaLongArrowAltDown} from 'react-icons/fa'

function SingleAnswer() {
    let [upVote, setUpVote] = useState(false);
    let [downVote, setDownVote] = useState(false);
    let countUp = upVote ? 11 : 10;
    let countDown = downVote ? 6 : 5;

    // Up vote button
    // Down vote and up vote is not true
    let upVoteBtn = !downVote && !upVote ? <Badge className="vote mr-2" variant="success" onClick={() => setUpVote(!upVote)}><FaLongArrowAltUp/> {countUp}</Badge>
    :
    // Down vote is true
    downVote ? <Badge className="vote mr-2" variant="success"><FaLongArrowAltUp/> {countUp}</Badge>
    :
    <Badge className="vote mr-2 active" variant="success" onClick={() => setUpVote(!upVote)}><FaLongArrowAltUp/> {countUp}</Badge>

    // Down vote button
    // Down vote and up vote is not true
    let downVoteBtn = !upVote && !downVote ? <Badge className="vote" variant="danger" onClick={() => setDownVote(!downVote)}><FaLongArrowAltDown/> {countDown}</Badge>
    :
    // Up vote is true 
    upVote ? <Badge className="vote" variant="danger"><FaLongArrowAltDown/> {countDown}</Badge>
    :
    <Badge className="vote active" variant="danger" onClick={() => setDownVote(!downVote)}><FaLongArrowAltDown/> {countDown}</Badge>

    return (
        <div className="answer text-dark mb-3">
            <Card className="p-3">
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut temporibus aliquid est sit, consequatur magni dignissimos id exercitationem necessitatibus quis, vitae sapiente possimus aspernatur! Fugit commodi non fuga provident?</p>
                
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 small">Answerd by - <b>Maruf Ahmed</b></p>
                    <div className="vote-btn d-flex">

                        {upVoteBtn}
                        {downVoteBtn}

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SingleAnswer

import React from 'react'
import Col from 'react-bootstrap/Col';
import SingleVideo from './SingleVideo';
import Suggestion from './Suggestion';


function VideoItem() {
    return (
        <>
            <Col xs={12} lg={8} style={{ border: "2px solid red" }}>
                <SingleVideo />
            </Col>
            <Col xs={12} lg={4} style={{ border: "2px solid red" }}>
                <Suggestion />
            </Col>
        </>
    )
}

export default VideoItem;

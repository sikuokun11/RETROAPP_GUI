import React from 'react'
import {Col,Button,Row} from 'antd';

function Board(props) {
    return (
        <Col className="board" span={4}>
            <div className="boardheader"></div>
            <div className="boardname">{props.name}</div>
            <Row>
                <div className="boardcreatedate">24 October</div>
                <div className="numcards">{props.numcards} cards</div>
            </Row>
            <hr/>
            <div className="boardbutton">
                <Button type="dashed">URL</Button>
                <Button type="dashed">Clone</Button>
            </div>
        </Col>
    )
}

export default Board

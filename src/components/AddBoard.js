import React from 'react'
import {Col,Button} from 'antd';
import { PlusOutlined} from '@ant-design/icons';

function AddBoard() {
    return (
        <Col className="addboard" span={4}>
            <Button type="primary" shape="circle" size="large" icon={<PlusOutlined/>}>
            </Button>
            <div><span>ADD</span></div>
        </Col>
    )
}

export default AddBoard

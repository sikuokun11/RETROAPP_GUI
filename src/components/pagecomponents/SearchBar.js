import React from 'react';
import {Input,Switch,Button} from 'antd';
import { SortAscendingOutlined,SortDescendingOutlined } from '@ant-design/icons';


const {Search} = Input;
function SearchBar() {
    return (
        <div className="searchbar">
            <Search className="searchbox" placeholder="input search text" enterButton />
            <span className="titlechild">Sort date</span>
            <Button shape="round" icon={<SortAscendingOutlined />}/>
            <Button shape="round" icon={<SortDescendingOutlined />}/>
            <span className="titlechild">Show archived</span>
            <Switch/>
        </div>
    )
}

export default SearchBar

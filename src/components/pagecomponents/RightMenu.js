import React from 'react';
import {Menu} from 'antd';

function RightMenu() {
    return (
        <Menu mode="horizontal">
        <Menu.Item key="mail">
          <h3 className="headerpagetext">Signin</h3>
        </Menu.Item>
        <Menu.Item key="app">
          <h3 className="headerpagetext">Signup</h3>
        </Menu.Item>
      </Menu>
    )
}

export default RightMenu

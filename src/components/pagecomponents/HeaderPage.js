import React from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function HeaderPage() {
    return (
        <nav className="menuBar">
            <div className="logo">
                <img src="./favicon.ico" alt=""/>
            </div>
            <div className="menuCon">
                <div className="leftMenu">
                    <LeftMenu/>
                </div>
                <div className="rightMenu">
                    <RightMenu/>
                </div>
            </div>
        </nav>
    )
}

export default HeaderPage

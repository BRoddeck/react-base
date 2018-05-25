import 'LESS/BaseStyle.less';

import Content from "./Content.jsx";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div className="container grid-container">
                <Header />
                <Menu />
                <Content />
            </div>
        );
    }
}

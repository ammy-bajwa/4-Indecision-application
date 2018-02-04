import React from 'react';
const Header = (props) => (
    <div className="header">
    <div className="container">
    <h1 className="header__title">{props.title}</h1>
    <h2 className="header__subtitle"> {props.sub_title}</h2>
    </div>
    </div>
);
Header.defaultProps = {
    title:"this is default text"
}
export default Header;
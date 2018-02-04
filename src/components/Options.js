import React from 'react';
import Option from './Option';
const Options = (props) => (
    <div>
    <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
    <button
     className="button button--remove" 
     onClick={props.removeAll}
     >
     Remove All
     </button>
    </div>
    {props.options.length === 0 && <h3 className="widget__message">Lets Add Some Options!</h3>}
    {props.options.map((option,index) => ( <Option
        key={option}
        count={index+1}
        optionText={option}
        deleteOption={props.deleteOption}
        />))}
    </div>
);
export default Options;
import React from 'react';
export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    formSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option_1.value.trim();
        e.target.elements.option_1.value = '';
        const error = this.props.addOption(option);
       this.setState(() => ({ error }));
    }
    render(){
        return(
            <div>
            <div>{this.state.error && <p className="add-option-error">{this.state.error}</p>}</div>
            <form className="add-option" onSubmit={this.formSubmit}>
            <input className="add-option__input" type="text" name="option_1" />
            <button className="button" type="submit">Add Option</button>
            </form>
            </div>
        );
    }
}
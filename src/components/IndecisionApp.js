import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options:[],
        selectedOption: undefined
    };
    removeAll = () => {
        return this.setState(() => ({options: [] }))
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        return this.setState(() => ({
            selectedOption: option
        }))
    };
    addOption = (option) => {
        if(!option)
        {
            return 'Please enter valid value';
        }
        else if(this.state.options.indexOf(option)>-1)
         {
            return 'This is alredy exists';
         } 
       
       this.setState((preState) => ({ 
           options: preState.options.concat([option])
        }));
            };
    deleteOption = (optionToRemove) => {
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }))
    };
    handleCloseButton = () => {
        return this.setState(() => ({
            selectedOption: undefined
        }))
    };
    componentDidMount = () => {
            try{
                const json = localStorage.getItem('options');
                const options = JSON.parse(json);
                if(options)
               { this.setState(()=>({options})); }
            }
            catch(e){
    
            }
            
    };
    componentDidUpdate = (prevProps, prevState) =>
         {
             if( prevState.options.length !== this.state.options.length )
            {
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json);
            }
    };
    componentWillUnmount = () => {
            console.log('componentWillUnmount');
        };
    render(){
        const title = 'Indecision App';
        const sub_title = 'Created By Amir Ali';
;        return(
            <div>
            <Header title={title} sub_title={sub_title}/>
            <div className="container">
            <Action hasOptions={this.state.options.length}
             handlePick = {this.handlePick}
             />
            <div className="widget">
            <Options 
            options = {this.state.options}
            removeAll = {this.removeAll}
            deleteOption = {this.deleteOption}
            />
            <AddOption addOption = {this.addOption}/>
            </div>
            </div>
            <OptionModal 
            selectedOption= {this.state.selectedOption}
            handleCloseButton= {this.handleCloseButton}
             />
            </div>
                 );
            }
}
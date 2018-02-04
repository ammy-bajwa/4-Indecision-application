class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    componentDidMount(){
        try{
            const countString = localStorage.getItem('count');
            const count = parseInt(countString, 10);
           
            if(!isNaN(count)){
                this.setState(()=>({count}));
            }
        }
        catch(e){
 
        }
    }
    componentDidUpdate(prevProps, prevState){
       
       if(prevState.count.length !== 0){
        localStorage.setItem('count', this.state.count);
    }
    }
    handleAddOne(){
        this.setState((prevState) =>( {  count: prevState.count + 1 }));
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return {  count: prevState.count - 1 };
           });
    }
    handleReset(){
        this.setState(() =>{
            return {  count: 0 }
           });
    }
    render(){
        return(
            <div>
            <h1>Count : {this.state.count} </h1>
            <button onClick={this.handleAddOne}>IncrementOne</button>
            <button onClick={this.handleMinusOne}>DecrementOne</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
}
const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);


// const appRoot = document.getElementById('app');
// let count = 0;
// const addOne = () => {
//     count++;
//     console.log('IncrementOne');
//    counterApp();
// };
// const subOne = () => {
//     count--;
//     console.log('DecrementOne');
//     counterApp();
// };
// const reset = () => {
//     count = 0;
//     console.log('Reset');
//     counterApp();
// };

// const counterApp = () =>
// {
//     const templateThree = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>Increment One</button>
//         <button onClick={subOne}>Decrement One</button>
//         <button onClick={reset}>Reset</button>
    
//         </div>
//     );
//     ReactDOM.render(templateThree, appRoot);

// };
// counterApp();
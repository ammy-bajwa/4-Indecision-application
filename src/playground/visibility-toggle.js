class VisibilityToggle extends React.Component {
     
    constructor(props) {
        super(props);
        let visibility = false;
        this.visibilityToggle = this.visibilityToggle.bind(this);
        this.state = (
            <div><p></p></div>
        );
    }
    visibilityToggle(){
     
       this.visibility = !this.visibility;
        if(this.visibility){
            return this.setState((preState) => {
              return  <div><p>Here are some details</p></div>
            })
        }
        else if (!this.visibility)
        {
            return this.setState((preState) => {
              return  <div><p></p></div>
            })
        }

    }
    render() {
        
        return(
            <div>
            <h1>VisibilityToggle App</h1>
            <button onClick={this.visibilityToggle}>{this.visibility ? 'Hide Details ' : ' Show Details '}</button>
            <p>{this.state}</p>
            </div>
        );
    }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle/>, appRoot);





// let visibility = false;
// const visibilityToggle = () => {
//     visibility = !visibility;
//     visibilityApp();
// };

// const appRoot = document.getElementById('app');
// const visibilityApp = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={visibilityToggle}>{visibility ? 'Hide Details ' : ' Show Details '} </button><br/>
//         {visibility && 'Here are some details'}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);

// };
// <ol>{this.itemVisibility && this.props.products.map((e) => {
//     return(
//         <div>
//         <li>
//         <span>Product Name : {e.productName}</span><br/>
//         <span>Product Quantity : {e.productQuantity}</span><br/>
//         <span>Product Link : {e.productLink}</span>
//         </li><hr/>
//         </div>
//     )
// })}</ol><br/>
// visibilityApp();
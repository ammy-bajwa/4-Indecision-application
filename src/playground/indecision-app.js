console.log("App.js is running");
const appRoot = document.getElementById('app');

//jsx
const app={
    title: 'Indecision App',
    options: []
};
const onSubmitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.option_1.value;
    if(option){
        app.options.push(option);
        e.target.elements.option_1.value = '';
        indecisionApp();
 }
    console.log(option);
};
const clearCounter = () => {
    app.options.length = [];
    indecisionApp();
};
const picker= () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
};
// const showItems = () => {
//     app.options.map((option) => {
//         return <p key={option}>item: {option}</p>;
//        })
//     indecisionApp();
// };
const indecisionApp = () => {
    const template = (
        <div>
            <h1>Indecision App</h1>
            <h3>Created By Amir Ali</h3>
            <form onSubmit={onSubmitForm}>
            <input type="text" name="option_1"/>
            <button>Add options</button>
            </form>
            <h3>total Items Added:{app.options.length}</h3>
            <button onClick={clearCounter}>Clear Counter</button>
            <button disabled={app.options.length === 0} onClick={picker}>Pick an random item</button>
           <ol>
            {app.options.map((option) =>{
                return <li key={option}>{option}</li>
            })}
            </ol>
        </div>
        );
        ReactDOM.render(template, appRoot);
};
indecisionApp();
//////////////////////////////////////////////////////////////////////////////////
// const userName="Amir Ali";
// const userAge=21;
// const userLocation="Faisalabad";
// const user = {
//     name : userName,
//     age : userAge,
//     location : userLocation
// }
// const getLocation = (location) =>
// {
//     if(location){
//         return(
//             <div>
//             <p>Location:{location}</p>
//             <h3>Location is present</h3>
//             </div>
//         );
//     }
// }

// const templateTwo = (
//     <div>
//     <h1>{user.age<30 ?  user.name : 'Sadiq Ali'}</h1>
//     {(user.age && user.age>=18) && <p>Age:{user.age}</p>}
//     {getLocation(user.location)}
//     </div>
// );
/////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////
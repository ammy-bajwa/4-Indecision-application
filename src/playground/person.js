export const isAdult = (age) => {
    if(age <= 18)
    {
    return  console.log('You are not an adult');
    }
   
    
    return   console.log('You are not an adult');
    
};
export const canDrink = (age) => {
    if(age >= 21)
    {
     return  console.log('You can Drink');
    }

    
    return  console.log('You can Drink');
    
};
const isSenior = (age) => {
    if(age >= 65)
    {
        return console.log('You are senior');
    }
    else 
    {
        return console.log('you are not senior');
    }
}
export default isSenior;
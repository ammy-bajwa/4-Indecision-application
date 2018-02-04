// const firstName = (name) => name.split(' ')[0];
// console.log(firstName('Amir Ali'));
// const fatherName = (name) => {
//     return name.split(' ')[1];
// }
// console.log(fatherName('Sadiq Ali'))

const user = {
    name: "Amir Ali",
    cities: ['Faisalabad','Dubai'],
    showPlaces() {
        return this.cities.map((city) =>this.name+ " has lived in " + city);
        
       }
    };
console.log(user.showPlaces());
const multiplier = {
    number: [1,2,3,4,5,6],
    multiplyBy: 6,
    multiply () {
       return this.number.map((num) => this.multiplyBy * num   ); 
    }
}
console.log(multiplier.multiply());

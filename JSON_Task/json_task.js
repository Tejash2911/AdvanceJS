// task1 : Import JSON file
const data = require('./india.json')

// task2 : Display City Name By Given State Name
// function cityByStateName(state) {
//     let arr = [];
//     let filData = data.filter((ele) => {
//         return ele.state_name === state
//             ? arr.push({
//                 CityName: ele.city,
//                 StateName: ele.state_name,
//             })
//             : null;
//     });
//     console.log(arr);
// }
// cityByStateName("Mahārāshtra");

// task3 : Sort City Name By Population Of Given State Name

// function sortCityByPopulation(state) {
//     let arr = [];
//     let filData = data.filter((ele) => {
//         return ele.population > 10000 && ele.state_name === state
//             ? arr.push({ cityName: ele.city, population: ele.population })
//             : null;
//     })

//     arr.sort((a, b) => {
//         return a.population - b.population;
//     })
//     console.log(arr);
// }

// sortCityByPopulation("Mahārāshtra");

// task4 : Print City List Which Have Population More Than I Give

// let newArr = [];

// let newData = data.map((ele) => {
//     return ele.population > 10000000
//         ? newArr.push({
//             cityName: ele.city,
//             Population: ele.population
//         })
//         : null;
// })
// console.log(newArr);

// task5 : Which State Have More Cities, Print City List

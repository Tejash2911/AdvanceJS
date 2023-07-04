// task1 : Import JSON file
const data = require('./india.json')

// import data from "./india.json" assert {type: 'json'}

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

let mostCities = {};
data.map((ele) => {
    let key = ele['state_name'];
    (mostCities[key] ? mostCities[key] : mostCities[key] = null || []).push(ele.city);
})

// console.log(mostCities);

let maxCitiesCount = 0;
let stateWithMaxCities = "";

for (let state in mostCities) {
    let citiesCount = mostCities[state].length;

    if (citiesCount > maxCitiesCount) {
        maxCitiesCount = citiesCount;
        stateWithMaxCities = state;
    }
}

console.log(`State ${stateWithMaxCities} Has Most Cities => ${maxCitiesCount}`);

// New Array With State Name And Number Of cities

// let obje = [];
// for (let i in mostCities) {
//     let state = i;
//     let cityCount = mostCities[i].length;
//     obje.push({ state: state, cityCount: cityCount });
// }

// console.log(obje)

// Example Only

// const inputArray = [
//     { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
//     { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
//     { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
//     { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
//     { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
//     { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
//     { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
//     { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" },
// ];

// let a = {};

// inputArray.map((e) => {
//     let estKey = e["Phase"];

//     (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
// });

// console.log(a);
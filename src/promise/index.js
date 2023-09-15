const promise = new Promise(function (resolve, reject) {
    resolve('hey!!👌')
});

const vacas = 15;

const cuantasVacas = new Promise(function (resolve, reject){
    if (vacas > 10) {
        resolve(`Si contamos con ${vacas} vacas en la granja`);
    } else {
        reject(`No contamos con las vacas en la granja`)
    }
    
});

cuantasVacas.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));
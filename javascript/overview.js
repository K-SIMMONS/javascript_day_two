//primitive data types
let isVip = true;
const appName = 'Very Cool App';
let score = 0;


console.log(isVip, appName, score);


// Compound/Complex Variables (groups)

const Array = [isVip, appName, score];
const object = {
    isVip: true,
    appName: 'Very Cool App',
    score: 0
}

//Functions

function makeH1(tet, myNumber) {
    const h1 = document.createElement('h1');
    h1.innerHTML = text + myNumber;
    document.body.appendChild(h1);

}

makeH1('I am an h1', 1);
makeH1('So am i', 2);
makeH1();
makeH1();

console.log(Array)[1], object['appName'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers);


// let doubledNumbers = [];

// numbers.forEach((num) => {
//     doubledNumbers.push(num * 2);
// });

// console.log(doubledNumbers);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
    { name: 'Company Ten', category: 'Finance', start: 1980, end: 2005 }
];

const companyNames = companies.map(comp => comp.name);

// console.log(companyNames);

const companyInfo = companies.map(comp => {
     return {
        name: comp.name,
        category: comp.category
    }    
});

// console.log(companyInfo);

// const companyYears = companies.map(comp => {
//     return [
//         (comp.end - comp.start)
//     ]
// });
// const companyYears = companies.map(comp => {
//     return {
//         name: comp.name,
//         category: comp.category,
//         start: comp.start,
//         end: comp.end,
//         years: (comp.end - comp.start)
//     } 
// });
const companyYears = companies.map(comp => {
    return {
        ...comp,
        years: (comp.end - comp.start)
    } 
});
// console.log(companyYears);

const squareAndDouble = numbers
.map((num) => Math.sqrt(num))
.map((num) => num * 2)
.map(num => num.toFixed(2));

console.log(squareAndDouble);

const squareAndDouble2 = numbers.map(function (number) {
    return Math.sqrt(number);  
}).map(function (sqrt) {
    return sqrt * 2;
}).map(double => double.toFixed(2))
.map(fixed2 => (fixed2 * 3).toFixed(2));

console.log(squareAndDouble2.filter(num => num % 2 === 0 ));

const evenDouble = numbers.filter(n => n % 2 === 0).map(num => num * 2);

console.log(evenDouble);

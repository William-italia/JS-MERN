
// const words = [
//     "banana",
//     "blueberry",
//     "blackberry",
//     "breadfruit",
//     "bilberry",
//     "boysenberry",
//     "blackcurrant",
//     "butternut",
//     "brazilnut",
//     "bittermelon"
// ];

// const result = words.filter(word => word.charAt(0) === "b" && word.length < 10);

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter( number => number % 2 === 0);

// console.log(evenNumbers);


// const evenNumbersList = [];
// const oddNumbersList = [];

// numbers.filter(number => {
//     if(number % 2 === 0) {
//         evenNumbersList.push(number);
//     } else {
//         oddNumbersList.push(number);
//     }
// });

// console.log('Even Numbers:', evenNumbersList);
// console.log('Odd Numbers:', oddNumbersList);

// numbers.forEach( (num) => {
//     if(num % 2 === 0) {
//         evenNumbersList.push(num);
//     } else {
//         oddNumbersList.push(num);
//     }
// })

// console.log('Even Numbers:', evenNumbersList);
// console.log('Odd Numbers:', oddNumbersList);

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

// const retailCompanies = companies.filter( company => company.category === 'Technology');
// const result = companies.filter( company => company.name === 'Company One');w

// retailCompanies.forEach(company => console.log(`${company.name} is the best, founded in ${company.start} with the intention of being a large ${company.category} company`));  

const longCompanies = companies.filter(companie => (companie.end - companie.start) >= 10);

console.log(longCompanies);

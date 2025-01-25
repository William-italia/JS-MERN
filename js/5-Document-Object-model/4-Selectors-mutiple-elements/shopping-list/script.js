//  querySelectorAll()

// const listItems = document.querySelectorAll('li');

// console.log(listItems);


// const item1 = listItems[1];

// item1.style.color = 'orange';

// listItems.forEach((item, index) => {
//     item.style.color = 'orange';

//     if (index % 2 === 0) {
//         item.style.backgroundColor = 'lightgray';
//         item.querySelector('.remove-item').style.backgroundColor = 'lightgray';
//     }


//     if (index === 2) {
//         item.firstChild.textContent = 'Orange Juice 2L';
//     }
    
//     if (index === 3) {
//         item.firstChild.textContent = 'Apple Juice 400ml';
//     }
// })


const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);

const listItems2Arr = Array.from(listItems2);

listItems2Arr.forEach(item => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');

console.log(listItems3);

const listItems3Arr = Array.from(listItems3);

// console.log(listItems3);
// console.log(listItems3Arr);


listItems3Arr.forEach(item => {
    console.log(item.innerText);
});

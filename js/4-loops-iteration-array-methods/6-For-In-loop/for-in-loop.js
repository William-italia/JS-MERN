const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'yellow',
    color5: 'purple',
    color6: 'orange',
    color7: 'pink',
    color8: 'brown',
    color9: 'gray',
    color10: 'black'
};


for (const key in colorObj) {                                                               
    console.log(`${key} : ${colorObj[key]}`);
}

const colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black'];

for (const color in colorArr) {
    console.log(`Key: ${color}, Value: ${colorArr[color]}`);
}
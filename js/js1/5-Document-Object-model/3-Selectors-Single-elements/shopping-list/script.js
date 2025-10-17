// document.getElementById();
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute(`id`));
// console.log(document.getElementById('app-title').setAttribute(`id`, `new-id`));
console.log(document.getElementById('app-title').title = 'Lista de compras');
console.log(document.getElementById('app-title').setAttribute('class', 'title'));

const title = document.getElementById('app-title');


console.log(title.innerText = 'Lista de compras');
console.log(title.textContent = 'Lista de compras');
console.log(title.innerHTML = '<i class="fa-solid fa-shop"></i> <strong>Lista de compras</strong>');

// chenge styles
title.style.color = 'red';
// title.style.backgroundColor = 'black';  
title.style.padding = '10px';
title.style.borderRadius = '5px';
title.style.textAlign = 'center'; 
title.style.fontSize = '2rem';
title.style.fontWeight = 'bold';
title.style.textTransform = 'uppercase';
title.style.fontFamily = 'Arial, sans-serif';
title.style.display = 'block';
title.style.width = '100%';
title.style.margin = '0';
title.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
title.style.transition = 'all 0.3s ease-in-out';
title.style.cursor = 'pointer';
title.style.userSelect = 'none';
title.style.textDecoration = 'none';
title.style.overflow = 'hidden';
title.style.whiteSpace = 'nowrap';
title.style.textOverflow = 'ellipsis';  
title.style.lineHeight = '1.5';
title.style.wordSpacing = '2px';
title.style.letterSpacing = '1px';  
title.style.textShadow = '2px 2px 2px rgba(0,0,0,0.5)'; 
title.style.opacity = '0.8';    
title.style.zIndex = '1';   
title.style.position = 'relative';  
title.style.top = '0';  
title.style.right = '0';
title.style.bottom = '0';
title.style.left = '0';
title.style.marginTop = '10px';
title.style.marginRight = '10px';
title.style.marginBottom = '10px';
title.style.marginLeft = '10px';
title.style.paddingTop = '10px';
title.style.paddingRight = '10px';
title.style.paddingBottom = '10px';
title.style.paddingLeft = '10px';
title.style.border = '1px solid red';
title.style.borderTop = '1px solid red';
title.style.borderRight = '1px solid red';
title.style.borderBottom = '1px solid red';
title.style.borderLeft = '1px solid red';
title.style.borderRadius = '5px';
title.style.boxSizing = 'border-box';
title.style.overflowX = 'hidden';
title.style.overflowY = 'auto';
title.style.display = 'flex';
title.style.flexDirection = 'row';
title.style.justifyContent = 'center';
title.style.alignItems = 'center';
title.style.flexWrap = 'wrap';
title.style.flexGrow = '1';
title.style.flexShrink = '1';
title.style.flexBasis = 'auto';
title.style.flex = '1 1 auto';
title.style.order = '0';
title.style.flexFlow = 'row wrap';
title.style.alignContent = 'center';
title.style.alignSelf = 'center';
title.style.flexGrow = '1';
title.style.flexShrink = '1';
title.style.flexBasis = 'auto';
title.style.flex = '1 1 auto';
title.style.order = '0';
title.style.flexFlow = 'row wrap';
title.style.alignContent = 'center';
title.style.alignSelf = 'center';
title.style.justifySelf = 'center';
title.style.placeSelf = 'center';
title.style.gridArea = '1 / 1 / 2 / 2';
title.style.gridColumn = '1 / 2';
title.style.gridRow = '1 / 2';
title.style.gridAutoFlow = 'row';
title.style.gridAutoColumns = 'auto';
title.style.gridAutoRows = 'auto';
title.style.gridTemplateColumns = 'auto';
title.style.gridTemplateRows = 'auto';
title.style.gridTemplateAreas = 'auto';

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.global-container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)'));

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerHTML = 'Orange Juice <button class="remove-item"><i class="fa-solid fa-xmark"></i>';
secondItem.style.color = 'orange'; 

const list = document.querySelector('ul');

console.log(list);

const firstItem =
list.querySelector('li');

firstItem.style.color = 'green';
firstItem.innerHTML = 'Lemon Juice <button class="remove-item"><i class="fa-solid fa-xmark"></i>';

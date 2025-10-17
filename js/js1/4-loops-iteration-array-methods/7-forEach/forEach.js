const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];

// colors.forEach( (el, index, arr) => console.log(`${index + 1} -  ${el}`) );

function colorsFunc(color) {
    console.log(color);
}

// colors.forEach(colorsFunc);

const socialObjs = [
    { name: 'instagram', url: 'instagram.com' },
    { name: 'facebook', url: 'facebook.com' },
    { name: 'twitter', url: 'twitter.com' },
    { name: 'linkedin', url: 'linkedin.com' },
    { name: 'snapchat', url: 'snapchat.com' },
    { name: 'tiktok', url: 'tiktok.com' },
    { name: 'pinterest', url: 'pinterest.com' },
    { name: 'reddit', url: 'reddit.com' },
    { name: 'tumblr', url: 'tumblr.com' },
    { name: 'youtube', url: 'youtube.com' }
];


socialObjs.forEach((item) => console.log(`${item.name} - ${item.url}`));
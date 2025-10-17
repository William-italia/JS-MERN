
(function () {
    const user = 'John';
    console.log(user);    

    const hello = () => console.log('Hello from the IIFE ' + user);
    
    hello();
})();

(function (name) {
    console.log('Hello ' + name);
})('William');

(function hello() {
    console.log('Hello');
})()
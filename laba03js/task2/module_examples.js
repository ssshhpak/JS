const basicModule = (function() {
    return {
        sayHello() {
            console.log("Hello");}
        }
})(); 

basicModule.sayHello();

const privateModule = (function() {
    let count = 0;
    function increment() {
        count++;
    }

    function getCount() {
        return count; 
    }

    return {
        increment,
        getCount
    };
})();

privateModule.increment();
console.log(privateModule.getCount()); 

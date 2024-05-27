function sum(a) {
    return function (b) {
        return a+b
        
    }
    
}

let sumwithThree = sum.bind(1);

console.log(sumwithThree(2)(3))
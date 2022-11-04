function greet = function(salutation) {
    return function(firstName) {
        return `${salutation} ${firstName}`;
    };
}

const howdy = greet('Howdy');


howdy('Jim')

console.log(howdy('Jim'))
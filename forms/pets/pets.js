let pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];
console.log(pets);


pets.splice(5,1);
console.log(pets);


pets.splice(3,1);
console.log(pets);


pets.unshift('Nancy');
console.log(pets);


pets.push('Patrick');
console.log(pets);


console.log(pets.indexOf('Riley'));


console.log(pets.indexOf('Cindy'));


let withMarmaduke = pets.concat('Marmaduke');
console.log(withMarmaduke);
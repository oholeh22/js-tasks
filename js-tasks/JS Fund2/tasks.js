// Циклы 

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
} // 0 1 2

let aar7 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] === 3) {
        break;
    }
    console.log(arr7[i]);
} // 1 2 

let i = 0;
while (true) {
    i++;
    if (i === 10) {
        break;
    }
}

console.log(i); // 10

let arr1 = [10, 20, 30];
for (let i in arr1) {
    console.log(i); // 0 1 2
};
for (let value of arr1) {
    console.log(value); // 10 20 30
}

let str = 'Hello';
console.log(str[0]); // H
console.log(str.charAt(0)); // H
console.log(str.slice(0, 3)); // Hel
console.log(str.toUpperCase()); // HELLO

const str = "Hello, World!";
console.log(str.includes("Hello")); // true
console.log(str.includes("o")); // true
console.log(str.includes("o", 9)); // false






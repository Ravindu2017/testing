function capitalize(name){
    return name[0].toUpperCase() + name.substring(1,name.length)
}

function reverseString(name){
    let newName = "";
    for (let i = name.length-1; i >= 0; i--) {
        newName += name[i];
    }
    return newName;
}

let calculate = {
    add: function(x, y) {
        return x + y;
    },

    subtract: function(x, y) {
        return x - y;
    },

    divide: function(x, y) {
        return x / y;
    },

    multiply: function(x, y) {
        return x * y;
    }
}


let testName = "bart";
// let str = "RAVEN";
let str = "RaVeN";

function makeOffset(name, offset) {
    let capitals = [];
    let cipher = "";
    for (let i = 0; i < name.length; i++) {
        let takeOff = 0;
        if (name.charCodeAt(i) + offset > 90) {
            takeOff = name.charCodeAt(i) - 65;
            takeOff = offset + takeOff;
            takeOff = takeOff % 26;
            takeOff = takeOff + 65;
        } else if (name.charCodeAt(i) + offset < 65) {
            takeOff = name.charCodeAt(i) - 64;
            takeOff = offset + takeOff;
            takeOff = takeOff % 26;
            takeOff = takeOff + 90;
        } else {
            takeOff = name.charCodeAt(i) + offset;
        }

        // console.log(name[i], name.charCodeAt(i), takeOff, String.fromCharCode(takeOff));

        cipher += String.fromCharCode(takeOff);
    }
    let ans = "";
    for (let j = 0; j < name.length; j++) {
        if (name[j] === name[j].toUpperCase()) {
            ans += cipher[j].toUpperCase();
        } else {
            ans += cipher[j].toLowerCase();
        }
    }

    console.log("Plain Text: ", name, "\nFinal Cipher: ", ans);

    return ans
}


makeOffset(str, 100);
makeOffset(str, -149);

// console.log(String.fromCharCode(78), str.charCodeAt(4));
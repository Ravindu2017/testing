function capitalize(name){
    return name[0].toUpperCase() + name.substring(1,name.length)
}

function reverseString(name){
    let newName = "";
    let finalName = "";
    for (let i = name.length-1; i >= 0; i--) {
        newName += name[i].toLowerCase();
    }

    for (let k = 0; k < name.length; k++) {
        if (name[k] === name[k].toUpperCase()) {
            finalName += newName[k].toUpperCase();
            // console.log(newName[k]);
        } else {
            finalName += newName[k];
        }
    }
    return finalName;
}

// console.log(reverseString("Arthur"));

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
let str = "Raven";

function makeOffset(rawName, offset) {
    let name = "";
    for (let k = 0; k < rawName.length; k++) {
        name += rawName[k].toUpperCase();
    }
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
    // for (let j = 0; j < name.length; j++) {
    //     if (name[j] === name[j].toUpperCase()) {
    //         ans += cipher[j].toUpperCase();
    //     } else {
    //         ans += cipher[j].toLowerCase();
    //     }
    // }

    for (let j = 0; j < rawName.length; j++) {
        if (rawName[j] === rawName[j].toUpperCase()) {
            ans += cipher[j].toUpperCase();
        } else {
            ans += cipher[j].toLowerCase();
        }
    }
    

    // console.log("Plain Text: ", name, "\nFinal Cipher: ", ans);

    return ans
}


// console.log(makeOffset(str, 85));
// console.log(makeOffset("TrAiNIng", 85));
// console.log(makeOffset("TRAINING", 85));
// console.log(String.fromCharCode(78), str.charCodeAt(4));


let analysis = {
    average: (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    },

    min: (arr) => {
        let min = arr[0];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
            }
        }
        return min;
    },

    max: (arr) => {
        let max = arr[0];
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] > max) {
                max = arr[k];
            }
        }
        return max;
    },

    length: (arr) => {
        return arr.length;
    }
}

// arr = [3,4,1,8,9];
// console.log(analysis.average([3,4,1,8,9]), analysis.min(arr), analysis.max(arr), analysis.length(arr));

module.exports = {
    capitalize,
    reverseString,
    calculate,
    makeOffset,
    analysis
}

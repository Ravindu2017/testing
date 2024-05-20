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

function caesarCipher(name, offset){
    let simpleName = "";
    let cipher = "";
    let absOffset = Math.abs(offset);
    // let capitals = [];
    // 65 - 122 is the range from "A" to "z"
    // We only care for 65 - 90 "A" to "Z"
    for (let i = 0; i < name.length; i++) {
        simpleName[i] = name[i].toLowerCase();
        // if (name[i] === name[i].toUpperCase()) {
        //     console.log("capital Word", name[i]);
        //     capitals.push(i);
        // }
    }

    // for (let i = 0; i < cipher.length; i++) {
    //     if (cipher.charCodeAt[i] + offset > 90) {
    //         offset = offset % 25;
    //     } else if (cipher.charCodeAt[i] + offset < 65) {
    //         offset = absOffset % 25;
    //     }
    // }

    for (let i = 0; i < simpleName.length; i++) {
        if (simpleName.charCodeAt[i] + offset > 90) {
            offset = offset % 25;
        } else if (simpleName.charCodeAt[i] + offset < 65) {
            offset = absOffset % 25;
        }
    }


    console.log(name[4], name.charCodeAt(4), name[5], name.charCodeAt(5));
    let exec = "brett";
    let simp = "";

    // for (let j = 0; j < capitals.length; j++) {
    //     exec[capitals[j]].toUpperCase();
    //     console.log(capitals[j], "rawr", exec[capitals[j]].toUpperCase(), exec)
    // }

    for (let i = 0; i < exec.length; i++) {
        if (name[i] === name[i].toUpperCase()) {
            simp += exec[i].toUpperCase();
        } else {
            simp += exec[i];
        }
    }

    return simp
}

let testName = "bart";

let str = "RaVeAZ"

console.log(capitalize(testName), reverseString(str), calculate.add(5, 4), caesarCipher(str));

let word = "what";

word[0] = word[0].toUpperCase();

console.log(word, str[1] === str[1].toUpperCase())
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
    console.log("HEY")
    let simpleName = "";
    let cipher = "";
    let absOffset = Math.abs(offset);
    // let capitals = [];
    // 65 - 122 is the range from "A" to "z"
    // We only care for 65 - 90 "A" to "Z"
    for (let i = 0; i < name.length; i++) {
        // simpleName += name[i].toLowerCase();
        simpleName += name[i].toUpperCase();
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

    console.log("simp", simpleName.length, simpleName);
    let test = 0;
    
    //here I have to change the letters individually
    for (let i = 0; i < simpleName.length; i++) {
        let newOffset = 0;
        if (simpleName.charCodeAt(i) + offset > 90) {
            newOffset = offset % 26;
            console.log(newOffset, "1");
            newOffset = (simpleName.charCodeAt(i) + newOffset) % 90 // = hopefully 2
            console.log(newOffset, "2", ( simpleName.charCodeAt(i) + newOffset ) % 90);
            // test = simpleName.charCodeAt(i) + offset
            test = 64 + newOffset
            // 86 + 6 = 92 we need to wrap it to be 2 over 65 so 67
            // test = offset + 65; COMMENTED
            // console.log("WHAT THE FUCK IS NOT HAPPNEING HERE23", "new = ", newOffset, "offset = ", offset % 26, "test = ", test, "simple comb = ", (simpleName.charCodeAt(i) + newOffset ) % 90)
            // console.log("1", test, simpleName.charCodeAt(i), simpleName[i], String.fromCharCode(simpleName.charCodeAt(i)), String.fromCharCode(test))

        } else if (simpleName.charCodeAt(i) + offset < 65) {
            newOffset = absOffset % 26;
            test = 90 - newOffset;
            // console.log("2", test, simpleName.charCodeAt(i), simpleName[i], String.fromCharCode(simpleName.charCodeAt(i)), String.fromCharCode(test))

        } else {
            newOffset = offset;
            test = simpleName.charCodeAt(i) + newOffset;
        }

        // else if (simpleName.charCodeAt(i) + offset < 90 || simpleName.charCodeAt[i] + offset > 65) {
        //     // cipher = simpleName.charCodeAt[i]
        //     console.log("titled", simpleName.charCodeAt(i) + offset);
        //     test = simpleName.charCodeAt(i) + offset;
        // }
        // test = simpleName.charCodeAt(i) + offset;
        cipher += String.fromCharCode(test);
        console.log(simpleName.charCodeAt(i), newOffset, test, simpleName[i], String.fromCharCode(test), "end");
        // console.log(String.fromCharCode(test));
        // console.log("simple name", simpleName.charCodeAt(i), simpleName[i], test, "test", offset, String.fromCharCode(test), "why", simpleName.charCodeAt(i) , offset);
    }

    console.log(cipher);


    // console.log(name[4], name.charCodeAt(4), name[5], name.charCodeAt(5));
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

// let str = "raven"

let str = "RAVEN";

// console.log(capitalize(testName), reverseString(str), calculate.add(5, 4), caesarCipher(str));

let word = "what";

word[0] = word[0].toUpperCase();

// console.log(word, str[1] === str[1].toUpperCase())

// caesarCipher(str, 6);

function makeOffset(name, offset) {
    // let takeOff = 0;

    for (let i = 0; i < name.length; i++) {
        let takeOff = 0;
        if (name.charCodeAt(i) + offset > 90) {
            takeOff = name.charCodeAt(i) - 65;
            takeOff = offset + takeOff;
            takeOff = takeOff % 26;
            takeOff = takeOff + 65;


            // if offset is high positive like 100
            // takeOff = (name.charCodeAt(i) + offset) % 26;
            // takeOff = takeOff + 65;
            // console.log("true", name[i], name.charCodeAt(i), takeOff)
            
            // Works kinda
            // takeOff = name.charCodeAt(i) % 26;
            // takeOff = takeOff + offset;
        } else if (name.charCodeAt(i) + offset < 65) {
            // if offset is high negative like -100
            takeOff = (name.charCodeAt(i) + offset) % 26;
            takeOff = 90 - takeOff;

        } else {
            takeOff = name.charCodeAt(i) + offset;
        }

        console.log(name[i], name.charCodeAt(i), takeOff, String.fromCharCode(takeOff),);
    }
}

// caesarCipher(str, 60);

makeOffset(str, 100);
console.log("talks")
makeOffset(str, 65);
console.log("guys");
makeOffset(str, 75);
console.log("forgiving");
makeOffset(str, 2);
console.log(String.fromCharCode(78), str.charCodeAt(4));
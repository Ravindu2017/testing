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
    let cipher = "";
    let capitals = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i] === name[i].toUpperCase()) {
            console.log("capital Word", name[i]);
            capitals.push(i);
        }
    }

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

let str = "RaVen"

console.log(capitalize(testName), reverseString(str), calculate.add(5, 4), caesarCipher(str));

let word = "what";

word[0] = word[0].toUpperCase();

console.log(word, str[1] === str[1].toUpperCase())
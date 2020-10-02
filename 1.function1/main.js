function reverseString(message){
    let resultSplit = message.split(""); 
    let resultReverse = resultSplit.reverse();
    let result = resultReverse.join("");

    return result;
}

console.log(reverseString('hello'));
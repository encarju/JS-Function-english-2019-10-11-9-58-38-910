function alphabetSort(message){
    let messageArray = message.split("");
    messageArray.sort();
    return messageArray.join("").trim();
}

console.log(alphabetSort('hello'));
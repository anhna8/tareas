function findLongestWord(text) {
    const words = text.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}


const text = "Querido Sr. Potter: nos complace informarte que has sido aceptado en la escuela de Hogwarts para magos y brujas.";
console.log(findLongestWord(text)); 

function makeArray(firstArray, secondArray, maxLength) {
    // firstArray ve secondArray dizilerini birleştir
    const newArray = firstArray.concat(secondArray);
    
    // Eğer birleştirilen dizinin uzunluğu maxLength'i geçerse, diziyi kısalt
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    }

    // Aksi halde, birleştirilen diziyi tamamen döndür
    return newArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

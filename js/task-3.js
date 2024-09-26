function filterArray(numbers, value) {
    // Eşleşen sayıları tutacağımız boş bir dizi oluştur
    const newArray = [];

    // numbers dizisindeki her bir öğe üzerinde yineleme yapmak için döngü kullan
    for (let i = 0; i < numbers.length; i++) {
        // Eğer sayı, value değerinden büyükse, yeni diziye ekle
        if (numbers[i] > value) {
            newArray.push(numbers[i]);
        }
    }

    // Filtrelenen diziyi döndür
    return newArray ;
    
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



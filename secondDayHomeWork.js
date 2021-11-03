
/**
 * @author istiklal
 */

// 1-) JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
function isPrimeNumber(number){
    for(let i=2;i<number;i++){
        if(number%i==0) return false
    }
    return true;
}
function isThereAnyPrime(...params){
    params.forEach(element => {
        if(isPrimeNumber(element)){
            console.log(`${element} is a prime number..`);
        }
    });
}

console.log("First isThereAnyPrime test for numbers : 15, 16, 17");
isThereAnyPrime(15, 16, 17);
console.log("Second isThereAnyPrime test for numbers : 2, 5, 8, 21, 13");
isThereAnyPrime(2,5,8,21,13);

// 2-) Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function totalOfDivisors(number){
    let total = 0;
    for(let i=1;i<number;i++){
        if(number%i==0) total += i
    }
    return total;
}

function isFriendNumbers(number1, number2){
    if(totalOfDivisors(number1)==number2&&totalOfDivisors(number2)==number1){ 
        return true;
    }else{
        return false;
    }    
}

console.log("isFriendNumbers test result for 220 and 284 : "+isFriendNumbers(220, 284));

// 3-) 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız
function getPerfectNumbers(limit){
    let perfectNumbers = []
    for(let sayi=1;sayi<=1000;sayi++){
        if(totalOfDivisors(sayi)==(sayi*2)) perfectNumbers.push(sayi);
    }
    return perfectNumbers;
}

console.log("perfectNumbers list between 1 and 1000 : "+getPerfectNumbers(1000));

// 4-) 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function getPrimes(limit){
    let primes = []
    for(let sayi=1;sayi<=limit;sayi++){
        if(isPrimeNumber(sayi)) primes.push(sayi);
    }
    return primes;
}

console.log(`getPrimes test list of prime numbers in [1, 1000] interval : ${getPrimes(1000)}`);

// we can write down using isThereAnyPrime() function like below;
console.log("prime numbers in [1, 1000] interval are lying below");
isThereAnyPrime(...Array(1000).keys());

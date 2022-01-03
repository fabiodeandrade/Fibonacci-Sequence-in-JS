
function Fibonacci (totalNumberOfSequence) {
    let fibArray = []

    fibArray[0] = 0;
    fibArray[1] = 1;

    for (let i = 2; i <= totalNumberOfSequence; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
    }

    return fibArray;
}

console.log(fibo(5)) //just for safe test
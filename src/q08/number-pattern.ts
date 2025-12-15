const input: number = parseInt(process.argv[2])
if(Number.isNaN(input) || input <= 0){
    console.log('Invalid Input')
}
let result = ''
for(let i = input; i > 0; i--){
    for(let j = i; j > 0; j--) {
        result += j
    }
    result +=  '\n'
}
console.log(result)
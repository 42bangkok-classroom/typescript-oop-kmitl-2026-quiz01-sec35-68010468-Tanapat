export{}

const input: number = parseInt(process.argv[2])
if(Number.isNaN(input) || input <= 0){
    console.log('Invalid Input')
}
else{
    for(let i = 0; i < input; i++){
        let result = ''
        for (let j = 0; j <= input; j++){
                result += '*'
        }
        console.log(result)
    }
}
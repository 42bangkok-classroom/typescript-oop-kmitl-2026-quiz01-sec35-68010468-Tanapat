const withdrawal: number = parseInt(process.argv[2])
const balance: number = parseInt(process.argv[3])
if(Number.isNaN(withdrawal) || Number.isNaN(balance)){
    console.log('Invalid Input')
}
else if( withdrawal > 5000){
    console.log('Exceeds per-withdrawal limit')
}
else if(withdrawal < balance){
    console.log('Insufficient balance')
}
else{
    console.log('Withdrawal approved')
}
let num = 15;
let factors=0;
for (let i=1 ;i<=15; i++){
if (num%i==0){
factors++;
}
if (factors=2){
console.log(num,"is prime");
} else {
console.log(num,"is not prime");

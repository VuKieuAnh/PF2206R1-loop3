// let a = +prompt("moi ban nhap diem");
// if(a>=90){
//     console.log("A");
// }
// else{
//     if(a>=80){
//         console.log("B")
//     }
//     else {
//         if(a>70){

//         }
//         else{

//         }
//     }
// }

function isPrime(n){
    let flag = true;
    if (n <2) return flag = false;
    let i = 2;
    while(i <=Math.sqrt(n)){
        if( n%i==0 ) {
            flag = false;
            break; 
        }
        i++;
    }
    return flag;
}

// let n= prompt(" nhap mot so n: ");

// let i = 0, check=0, result ="";
//    while ( i < n){
//     check = isPrime(i);
//     if( check == 1 ) result += i + " ";
//     ++i;
// }
// console.log(result); 
// let n = +prompt("moi ban nhap so luong so");
// let a = 1
// let b = 1
// let storage
// for(let i = 1; i <=n; i++){
//     if(i == 1 || i == 2){
//         document.write(1)
//         document.write('<br>')
//     } else{
//         storage = a
//         a += b
//         b = storage
//         document.write(a)
//         document.write('<br>')
//     }
// }

//     let n1 = 1;
//     let n2 = 1;
//     let number_next;
//     let N = +prompt("Hay nhap vao so nguyen duong");
//     for (i = 3; i <= N; i++) {
//         number_next = n1 + n2;
//         document.write(number_next + " ");
//         n1 = n2;
//         n2 = number_next;

// }

function checkEven(n){
    return (n%2==0);
}
function checkOdd(n){
    return (n%2!==0);
}
let n= + prompt("Moi ban nhap vao so luong so chan");
let count = 0;
let start = 10;
while(count<n){
    if(isPrime(start)){
        document.write(start + "<br>");
        count++;
    }
    start++;
}
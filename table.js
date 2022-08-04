//4 hang
//3 cot
// let content = "<table border='1px'>";
// for(let i=1; i<10; i++){
//     //4 hang
//     content+= "<tr>";
//     for(let j = 2; j<10; j++){
//         //3 cot
//         content+="<td>"+i +"*"+j+"="+(i*j)+"</td>"
//     }
//     content+="</tr>";
// }
// content += "</table>"
// document.getElementById('content').innerHTML = content;

// for(let i = 0 ; i <8; i++){
//     for(let j=0; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

for(let i = 0 ; i <8; i++){
    for(let j=0; j<(8-i); j++){
        document.write("*");
    }
    document.write("<br>");
}



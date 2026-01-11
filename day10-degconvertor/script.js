const input=document.getElementById('input');
const output=document.getElementById('output');
const convertBtn=document.getElementById('btn');
const toggleBtn=document.getElementById('toggleBtn');
let isCtoF=true;
function convert(){
    let cval=Number(input.value);
    let fval= (cval * 9/5) + 32;
    let result=document.getElementById('result');
    result.innerHTML=fval.toFixed(2) + " °F";
}
btn.addEventListener('click',convert);

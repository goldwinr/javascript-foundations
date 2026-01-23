const btn=document.getElementById('button');
const color=document.getElementById('color');
const wrap=document.getElementById('container');
const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

btn.addEventListener('click',change)
function change(){
    let hexcolor='#';
    for(let i=1;i<=6;i++){
        hexcolor+=randomColor();
    }
    wrap.style.backgroundColor=hexcolor; 
    color.textContent=hexcolor;
}

function randomColor(){
    let ranind=Math.floor(Math.random()*16);
    return hex[ranind];
}
const btn=document.querySelector("button")
const resdiv=document.createElement('div')
    resdiv.id='result';
    document.getElementById('container').appendChild(resdiv);
btn.addEventListener('click',displaystat)
function displaystat(){
    console.log("button clicked");
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population=0;
    let literacyrate=0;
    let language='';
    switch(city)
    {
        case 'Chennai':
            population=7090000;
            literacyrate=90;
            language='Tamil';
            break;
        case 'Mumbai':
            population=12442373;
            literacyrate=89;
            language='Marathi';
            break;
        case 'Bangalore':
            population=8443675;
            literacyrate=88;
            language='Kannada';
            break;
        case 'Delhi':
            population=16787941;
            literacyrate=86;
            language='Hindi';
            break;
    }
    let text=`The Indian city ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyrate}%.`
    
    document.getElementById('result').innerHTML=text;
    
}

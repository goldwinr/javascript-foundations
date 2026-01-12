function fdrate(){
    const months=Number(document.getElementById("input").value);
    let rate=0;
    if(months<3)
        rate=5.8
    else if(months>=3 && months<6)
        rate=6.5
    else if(months>=6 && months<9)
        rate=6.8
    else
        rate=7
    const res=document.getElementById("result");
    res.innerHTML="Your Interest rate is "+rate+"%";
}


num = (a) =>{
    document.getElementById("inp").value +=a;
}
op = (b) =>{
    document.getElementById("inp").value +=b;
}
res = () =>{
    const c = eval(document.getElementById("inp").value);
    document.getElementById("inp").value =c;
}
del = (a) =>{
     const d =  document.getElementById("inp").value;
     document.getElementById("inp").value = d.substring(0,d.length-1);
}
cle = () =>{
    document.getElementById("inp").value ="";
}